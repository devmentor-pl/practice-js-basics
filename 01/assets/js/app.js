const a = '4.2';
const b = 9;
console.log(typeof a, typeof b)

console.log(a, b);
const sum = parseFloat(a) + b
console.log(sum)
const minus = a - b
console.log(minus)
const multiply = (a * b).toFixed(1)
console.log(multiply)
const split = (a / b).toFixed(1)
console.log(split)


const arr = [sum, minus, multiply, split]

arr.forEach(el => el > 20 ? console.log(`${el} jest większy od 20`) : console.log(`${el} jest mniejszy lub równy 20`))