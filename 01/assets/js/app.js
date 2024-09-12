const a = '4.2';
const b = 9;

console.log(typeof a);
console.log(typeof b);

function printResult(value) {
    if (value > 20) {
        console.log('Result is greater than 20');
    } else {
        console.log('Result is not greater than 20');
    }
}
/* dodawanie */
const sum = parseFloat(a) + b;
console.log(sum);
printResult(sum);

/* konkatenacja */
const concatenation = a + b;
console.log(concatenation);
printResult(concatenation);

/* odejmowanie  */
const subtraction = b - parseFloat(a);
console.log(subtraction);
printResult(subtraction);

/* mnożenie */
const multiplication = parseFloat(a) * b;
console.log(multiplication);
printResult(multiplication);

/* dzielenie  */
const division = b / parseFloat(a);
console.log(division);
printResult(division);

/* reszta z dzielenia  */
const remainder = b % parseInt(a);
console.log(remainder);
printResult(remainder);



