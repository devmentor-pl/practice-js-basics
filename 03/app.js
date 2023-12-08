// 'use strict'
const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(x, y, z) {
    let numbers = [x, y, z]
    numbers = numbers.map(x => parseInt(x))

    numbers = numbers.sort(function (a, b) {
        return b - a
    })

    const result = numbers[0] + numbers[1]
    return result
}

const isEven = function (x) {
    let isEvenResult = 0
    if (typeof x !== 'number') {
        return null
    }
    else {
        if (x % 2 === 0) {
            return true
        }
        else
            return false
    }
}
function showInfo(x, y) {
    switch (y) {
        case null: console.log('Podany argument ' + x + ' nie jest liczbą')
            break
        case false: console.log('Podany argument ' + x + ' jest nieparzysty')
            break
        case true: console.log('Podany argument ' + x + ' jest parzysty')
            break
    }
}

const getSumResult = getSum(a, b, c)

const isEvenResult = isEven(getSumResult)

showInfo(getSumResult, isEvenResult)