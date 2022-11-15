const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

const add = parseInt(a) + b;
if(add > 20) {
    console.log('Wynik większy od 20')
} else {
    console.log('Wynik mniejszy od 20')
};
console.log(add);

const subtract = b - parseInt(a);
if(subtract > 20) {
    console.log('Wynik większy od 20')
} else {
    console.log('Wynik mniejszy od 20')
};
console.log(subtract);

const multi = parseInt(a) * b;
if(multi > 20) {
    console.log('Wynik większy od 20')
} else {
    console.log('Wynik mniejszy od 20')
};
console.log(multi);

const division = b / parseInt(a);
if(division > 20) {
    console.log('Wynik większy od 20')
} else {
    console.log('Wynik mniejszy od 20')
};
console.log(division);

const modulo = b % parseInt(a);
if(modulo > 20) {
    console.log('Wynik większy od 20')
} else {
    console.log('Wynik mniejszy od 20')
};
console.log(modulo);

const addStringAndNum = a + b;
if(addStringAndNum > 20) {
    console.log('Wynik większy od 20')
} else {
    console.log('Wynik mniejszy od 20')
};
console.log(addStringAndNum);

