const min = 1;
const max = 100;


const arr = creatArray(10, 200)
const largest = getLargest(arr)
const avg = getAvg(largest)

console.log(arr, largest, avg)

function creatArray(min, max) {
    const arr = []
    for(let i=0; i<20; i++) {
        const num = Math.round((Math.random() * (max - min)) + min)

   arr.push(num)
}
return arr 
}

function getLargest(arr) {
    arr.sort(function(a,b) {
        return b - a
    })

const largest = arr.slice(0,10)
console.log(largest)
}

function getAvg(arr) {
    if( arr.length === 0) {
        return 0;
    }

    const sum = arr.reduce(function(acc, curr) {
        return acc + curr
    }, 0)

    return sum / arr.length
}




