const a = '4.2';
const b = 9;
console.log(a, b);
console.log(typeof a, typeof b);

const sum = parseFloat(a + b);
const odj = parseFloat(a - b);
const mno = parseFloat(a * b);
const dzie = parseFloat(a / b);
const modulo = parseFloat(a % b);

console.log(sum, odj, mno, dzie, modulo);

if(sum > 20) {
    console.log('suma wieksza od 20')
} else {
    console.log('suma mniejsza od 20')
};
if(odj > 20) {
    console.log('różnica wieksza od 20')
} else {
    console.log('różnica mniejsza od 20')
};
if(mno > 20) {
    console.log('iloczyn wiekszy od 20')
} else {
    console.log('iloczyn mniejszy od 20')
};
if(dzie > 20) {
    console.log('iloraz wiekszy od 20')
} else {
    console.log('iloraz mniejszy od 20')
};
if(modulo > 20) {
    console.log('wynik wiekszy od 20')
} else {
    console.log('wynik mniejszy od 20')
};
