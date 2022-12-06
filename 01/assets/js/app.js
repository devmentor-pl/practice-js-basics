let a = '4.2';
let b = 9;
const MAX_VALUE = 20;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

const sum = +a + b; // wlasnie dlatego TypeScript jest cool :D
printResult('sum', sum);

const diff = a - b;
printResult('diff', diff);

const multiply = a * b;
printResult('multiply', multiply);

const divide = a / b;
printResult('divide', divide);

const mod = a % b;
printResult('mod', mod);

const incrA = ++a;
printResult('incrA', incrA);

const incrB = ++b;
printResult('incrB', incrB);

const decrA = --a;
printResult('decrA', decrA);

const decrB = --b;
printResult('decrB', decrB);

function printResult(operation, result) {
    console.log(`${operation}: ${result}`);
    console.log(
        `${operation} ${
            result > MAX_VALUE ? 'większy' : 'mniejszy'
        } niż ${MAX_VALUE}`
    );
}
