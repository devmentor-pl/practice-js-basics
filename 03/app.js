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
    
    arr.sort(function(a, b) {
        return a - b
    })

    return arr[0] + arr[1]
}

const sum = getSum(a, b, c)
console.log(sum)




function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const isEven = function(num) {

    if (typeof num !== 'number') {
        return null
    }

    return num % 2 === 0

}

console.log(isEven(1), isEven(2), isEven('jfjfjfjf'))