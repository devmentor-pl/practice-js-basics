const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b)

const addition = Number(a) + b
console.log(addition)

const subtraction = a - b
console.log(subtraction)

const multiplication = a * b
console.log(multiplication.toFixed(2))

const division = a / b
console.log(division)


const check = function (result) {
    if (result > 20) {
        console.log(result + ' Wynik jest większy od 20')
    } else {
        console.log(result + ' Wynik jest mniejszy od 20')
    }
}

console.log(check(addition))
console.log(check(subtraction))
console.log(check(multiplication.toFixed(2)))
console.log(check(division))

