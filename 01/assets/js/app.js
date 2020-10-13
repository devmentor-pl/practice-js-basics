const a = '4.2';
const b = 9;

const results = [];

console.log(a, b);
console.log(typeof a, typeof b);


const add = parseFloat(a) + b;
results.push(add);

const subtract = a - b;
results.push(subtract);

const multiply = a * b;
results.push(multiply);

const divide = a / b;
results.push(divide);

const modulo = a % b;
results.push(modulo);

console.log(results);

const higherThan20Array = results.map(function (result) {
    if (result > 20) {
        return 'Większy od 20'
    } else return 'Mniejszy od 20';
})

console.log(higherThan20Array);