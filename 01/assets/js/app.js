const a = '4.2';
const b = 9;

const number = 20


console.log(a, b);

console.log(typeof(a));
console.log(typeof(b));

let c = parseInt(a)
console.log(typeof(c));

const getAdd = c + b
console.log(`getAdd ${getAdd}`);

const getSubtract = c - b
console.log(`getSubtract ${getSubtract}`);

const getMultiply = c * b
console.log(`getMultiply ${getMultiply}`);

const getDivide = c / b
console.log(`getDivide ${getDivide}`);

const getModulo = c % b
console.log(`getModulo ${getModulo}`);

if (getAdd > number || getSubtract > number || getMultiply > number || getDivide > number || getModulo > number ) {
    console.log('ok');
} else {
    console.log('zle');
}


