const arr = createArray(10, 200)
const largest = getLargest(arr)
const avg = getAvg(largest)

console.log(arr, largest, avg)


function createArray(min, max) {
    const arr = []
    for (let i = 0; i < 20; i++) {
        const num = Math.round((Math.random() * (max - min)) + min)
        arr.push(num)
    }
    return arr
}


function getLargest(arr) {
    arr.sort(function (a, b) {
        return b - a
    })

    return arr.slice(0, 10)
}


function getAvg(arr) {
    if(arr.length === 0) {
        return 0
    }

    const sum = arr.reduce(function(acc, curr) {
        return acc + curr
    }, 0)
    return sum / arr.length
}