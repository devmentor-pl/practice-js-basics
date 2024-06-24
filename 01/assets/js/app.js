const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const a2 = parseFloat(a);

const add = a2 + b; 
const sub = a2 - b; 
const multi = a2 * b;
const divi = a2 / b;

console.log(add);
console.log(sub);
console.log(multi);
console.log(divi);

console.log(a, a2, b);

if (add > 20) {
    console.log('add jest większe od 20')
} else {
    console.log('add nie jest większe od 20')
}

if (sub > 20) {
    console.log('sub  jest większe od 20')
} else { 
    console.log('sub  nie jemultist większe od 20')
}

if (multi > 20) {
    console.log('multi jest większe od 20')
} else {
    console.log('multi nie jest większe od 20')
}

if (divi > 20) {
    console.log('divi  jest większe od 20')
} else { 
    console.log('divi  nie jest większe od 20')
}

