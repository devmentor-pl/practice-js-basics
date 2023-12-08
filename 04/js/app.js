'use strict'

function randomNumber(min, max) {
    let randomNumberArray = []
    for (let i = 0; i < 20; i++) {
        let number = Math.round((Math.random() * (max - min)) + min);
        randomNumberArray.push(number)
    }
    return randomNumberArray
}

function sortAndSliceArray(x, y) {
    x = x.sort(function (a, b) {
        return b - a
    })
    if (y > x.length) {
        console.log("Y is higher than array length")
    }
    else {
        x = x.slice(0, y)
    }
    return x
}

function getAvg(x) {
    let sum = 0
    x.forEach(function (y) {
        sum = sum + y
    })
    const avg = sum / x.length
    return avg
}


const randomArray = randomNumber(10, 200)
console.log(randomArray)
const highest = sortAndSliceArray(randomArray, 10)
console.log(highest)
const result = getAvg(highest)
console.log(result)