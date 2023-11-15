const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof(a), typeof(b));

const add = Number(a) + Number(b);
console.log(add);
if(add > 20) {
    console.log('Wynik dodawania większy od 20');
}

const subtraction = Number(a) - Number(b);
console.log(subtraction);
if(subtraction > 20) {
    console.log('Wynik odejmowania większy od 20');
}

const multi = Number(a) * Number(b);
console.log(multi);
if(multi > 20) {
    console.log('Wynik mnożenia większy od 20');
}

const division =  Number(a) / Number(b);
console.log(division);
if(division > 20) {
    console.log('Wynik dzielenia większy od 20');
}

const modulo = Number(a) % Number(b);
console.log(modulo);
if(modulo > 20) {
    console.log('Wynik reszty z dzielenia większy od 20');
}

const power = Math.pow(Number(a), Number(b));
console.log(power);
if(power > 20) {
    console.log('Wynik potęgowania większy od 20');
}