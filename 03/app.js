const min = 1
const max = 100

const a = randomNumber(min, max)
const b = randomNumber(min, max)
const c = randomNumber(min, max)

console.log(a, b, c)

const getSum = function (a, b, c) {
    return [a, b, c].sort(function (a, b) {
        return a - b
    }).slice(-2).reduce(function (reducer, number) {
        return reducer + parseInt(number)
    }, 0)
}
const isEven = function (sumNumber) {
    const isEven = !!(sumNumber % 2 === 0)
    if (typeof sumNumber !== 'number' || isNaN(sumNumber)) {
        return null
    } else if (typeof sumNumber === 'number') {
        return isEven
    }
}

const showInfo = function (value, bool) {
    switch (bool) {
        case true:
            return console.log(`Podany argument  ${value} jest parzysty`)
        case false:
            return console.log(`Podany argument  ${value} jest nieparzysty`)
        case null:
            return console.log(`Podany argument ${value} nie jest liczbą`)
        default:
            break
    }
}





function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min)
}

const sum = getSum(a, b, c)
const even = isEven(sum)
showInfo(sum, even)
