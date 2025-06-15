const a = '4.2';
const b = 20;
const c = parseFloat(a);

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

const addVariable = c + b;
console.log(addVariable);

const concatVariable = a + b;
console.log(concatVariable);

const subtractVariable = a - b;
console.log(subtractVariable);

const multiVariable = a * b;
console.log(multiVariable);

const divideVariable = a / b;
console.log(divideVariable);

const modVariable = Number(a) % b;
console.log(modVariable);

let incrementVar = a;
incrementVar++;
console.log(incrementVar);

let decrementVar = b;
decrementVar--;
console.log(decrementVar);


if (addVariable > 20) {
    console.log('a+b jest wieksze od 20')
} else {
    console.log('a+b jest mniejsze od 20')
}

if (subtractVariable > 20) {
    console.log('a-b jest wieksze od 20')
} else {
    console.log('a-b jest mniejsze od 20')
}

if (multiVariable > 20) {
    console.log('a*b jest wieksze od 20')
} else {
    console.log('a*b jest mniejsze od 20')
}

if (divideVariable > 20) {
    console.log('a/b jest wieksze od 20')
} else {
    console.log('a/b jest mniejsze od 20')
}

if (modVariable > 20) {
    console.log('a%b jest wieksze od 20')
} else {
    console.log('a%b jest mniejsze od 20')
}

if (incrementVar > 20) {
    console.log('a++ jest wieksze od 20')
} else {
    console.log('a++ jest mniejsze od 20')
}

if (decrementVar > 20) {
    console.log('a-- jest wieksze od 20')
} else {
    console.log('a-- jest mniejsze od 20')
}

console.log();
console.log();

