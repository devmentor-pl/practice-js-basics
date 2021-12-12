const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

const convertedA = parseFloat(a);

const addNumbers = convertedA + b;
const subtractNumbers = convertedA - b;
const multiplyNumbers = convertedA * b;
const divideNumbers = convertedA / b;
const moduloNumbers = b % convertedA;

console.log(
    addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, moduloNumbers);


const arr = [addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, moduloNumbers];

const result = arr.forEach(element => {
    if (element < 20) {
        console.log(element + " " + "jest mniejsze od 20");
    } else {
        console.log(element + " " + "jest wieksze niz 20");
    }
})