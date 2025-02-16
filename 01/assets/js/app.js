const a = '4.2';
const b = 9;

console.log(a, b);

// 1. Check the types of variables
console.log("Type of variable a: ", typeof a); // string
console.log("Type of variable b: ", typeof b); // number

// 2. Arithmetic operations
// Convert 'a' to a number to avoid string concatenation
const addition = parseFloat(a) + b;

const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const modulo = a % b;
const exponentiation = a ** b;

// console.log("Addition: ", addition);
// console.log("Subtraction: ", subtraction);
// console.log("Multiplication: ", multiplication);
// console.log("Division: ", division);
// console.log("Modulo: ", modulo);
// console.log("Exponentiation: ", exponentiation);

// 3. Check which result is greater than 20, which is less than 20 and which is equal to 20
const results = [
    { name: 'Addition', value: addition },
    { name: 'Subtraction', value: subtraction },
    { name: 'Multiplication', value: multiplication },
    { name: 'Division', value: division },
    { name: 'Modulo', value: modulo },
    { name: 'Exponentiation', value: exponentiation }
];

results.forEach(result => {
    if (!result || typeof result.value !== 'number' || typeof result.name !== 'string') {
        console.error('Invalid result object encountered:', result);
        return;
    }

    if (result.value > 20) {
        console.log(`${result.name} result ${result.value} is greater than 20.`);
    } else if (result.value < 20) {
        console.log(`${result.name} result ${result.value} is less than 20.`);
    } else {
        console.log(`${result.name} result ${result.value} is equal to 20.`);
    }
});