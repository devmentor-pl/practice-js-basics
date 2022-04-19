const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(x, y, z) {
    const xInt = parseInt(x)
    const yInt = parseInt(y)
    const zInt = parseInt(z)

    const arr = [xInt, yInt, zInt]
    arr.sort(function(a,b) {
        return b - a
    })
   return arr[0] + arr[1]
}
const sum = getSum(a,b,c)
console.log(sum)


const isEven = function(num) {
    if(typeof num !== 'number') {
        return null
    }
    if(num % 2 === 0) {
        return true
    }
    return false
}

// console.log(isEven(2), isEven(3), isEven())

function showInfo(n, isEven) {
    switch(isEven) {
        case null:
            console.log('Podany argument '+n+' nie jest liczbą')
        break
        case true:
            console.log('Podany argument '+n+' jest parzysty')
        break
        case false:
            console.log('Podany argument '+n+' jest nieparzysty')
        break
    }
}

const even = isEven(sum)

showInfo(sum, even)

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

