console.log('test!!!')


const arr = createArr(1, 100)
const largest = getLargest(arr)
const avg = getAvg(largest)

console.log(arr)
console.log(largest)
console.log(avg)

function createArr (min, max) {
    const array =[]
    for (let i=0; i<20; i++) {

        const num = Math.round((Math.random() * (max - min)) + min)

        array.push(num)

    }

    return array
}

function getLargest(array) {

    array.sort(function(a, b) {
        return b - a
    })

    return array.slice(0,10)

}

function getAvg(array) {
    if(array.length === 0) {
        return 0
    }

    const sum = array.reduce(function(acc, curr) {
        return acc + curr
    }, 0) 

    return sum / array.length

    }

    // FINISHED