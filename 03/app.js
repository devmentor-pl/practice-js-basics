const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

function getSum(x, y, z) {
    const xInt = parseInt(x)
    const yInt = parseInt(y)
    const zInt = parseInt(z)
    const arr = [xInt, yInt, zInt]
    arr.sort(function (a, b) {
        return b - a
    })
    return arr[0] + arr[1]
}
const sum = getSum(a, b, c);
console.log(sum)
console.log(typeof sum)


const even = isEven(sum);

function randomNumber(min, max) {
    return Math.round((Math.random() *(max-min)) + min)
}

function isEven(num) {
    if (typeof num !== 'number') {
        return null
    } else
        return num % 2 === 0;
}

console.log(even)
console.log(isEven('nn'))


function showInfo(value, isEven) {
    let result;
    switch(isEven) {
        case null: 
            result = 'Podany argument'+ value + 'nie jest liczbą'
            break
        case true:
            result = 'Podany argument'+ value + 'jest parzysty'
            break
        case false: 
            result = 'Podany argument'+ value + 'jest nieparzysty'
            break
    }
    return result
}

result = showInfo(sum, even)

console.log(result)
