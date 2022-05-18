const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

const sum = parseFloat(a) + parseFloat(b);
console.log(sum);

const subtract = parseFloat(a) - parseFloat(b);
console.log(subtract);

const multiply = parseFloat(a) * parseFloat(b);
console.log(Number(multiply.toFixed(1)));

const divide = parseFloat(a) / parseFloat(b);
console.log(divide);

const results = [sum, subtract, Number(multiply.toFixed(1)), divide];

for (let i = 0; i < results.length; i++) {
    if (results[i] > 20) {
        console.log(results[i] + " is greater than 20.");
    } else {
        console.log(results[i] + " is less or equal than 20.");
    }
}