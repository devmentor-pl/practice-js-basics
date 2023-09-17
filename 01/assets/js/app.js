const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

const sum = parseFloat(a) + b;
const diff = a - b;
const multiply = a * b;
const quotient = a / b;
const modulo = a % b;

console.log(sum, diff, multiply.toFixed(2), quotient.toFixed(2), modulo);

if (sum > 20) {
    console.log(sum + ' is more than 20');
} else if (sum < 20) {
    console.log(sum + ' is less than 20');
}
if (diff > 20) {
    console.log(diff + ' is more than 20');
} else if (diff < 20) {
    console.log(diff + ' is less than 20');
}
if (multiply > 20) {
    console.log(multiply.toFixed(2) + ' is more than 20');
} else if (multiply < 20) {
    console.log(multiply.toFixed(2) + ' is less than 20');
}
if (quotient > 20) {
    console.log(quotient.toFixed(2) + ' is more than 20');
} else if (quotient < 20) {
    console.log(quotient.toFixed(2) + ' is less than 20');
}
if (modulo > 20) {
    console.log(modulo + ' is more than 20');
} else if (modulo < 20) {
    console.log(modulo + ' is less than 20');
}
