const a = '4.2';
const b = 9;

console.log(a, b);

const typeOne = typeof(a);
const typeTwo = typeof(b);

console.log(typeOne);
console.log(typeTwo);

// arithmetic operations

const sum = parseFloat(a) + b;
console.log(sum);

const substract = a - b;
console.log(substract);

const multi = a * b;
console.log(multi);

const divide = a / b;
console.log(divide);

const modulo = b % parseInt(a);
console.log(modulo);

const exponentiation = parseInt(a) ** b;
console.log(exponentiation);

// function isGrater

const chcek = isGreater(sum)

function isGreater (a) {
    if(a > 20) {
        return console.log("Jestem większa od 20")
    } else {
        return console.log("Jestem mniejsza od 20")
    }
};