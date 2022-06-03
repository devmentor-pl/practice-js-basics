const createArray = function (min, max) {
    let arr = []
    for (let i = 1; i <= 20; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min
        arr.push(randomNumber)
    }
    return arr
}
const getLargest = function (arr) {
    return arr.sort((a, b) => a - b).slice(-10)
}

const getAvg = function (arr) {
    return arr.reduce(function (reducer, number, index) {
        if (index === arr.length - 1) {
            return (reducer + number) / arr.length
        } else {
            return reducer + number
        }
    }, 0)
}

const arr = createArray(10, 200)
console.log(arr)

const largest = getLargest(arr)
console.log(largest)

const avg = getAvg(largest)
console.log(avg)