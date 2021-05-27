const a = '14.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

const c = parseFloat(a);

// Konkatenacja
const concatenate = a + b;
console.log('Konkatenacja:', concatenate)
// typ
console.log('Typ:', typeof concatenate);

// Suma
const sum = c + b;
console.log('Suma:', sum);

if(sum > 20) {
    console.log('Wynik jest większy od 20');
} else {
    console.log('Wynik jest mniejszy od 20');
}
// typ
console.log('Typ:', typeof sum);

// Odejmowanie
const subtract = c - b;
console.log('Odejmowanie:', subtract);
if(subtract > 20) {
    console.log('Wynik jest większy od 20');
} else {
    console.log('Wynik jest mniejszy od 20');
}
// typ
console.log('Typ:', typeof subtract);

// Mnożenie
const multiply = c * b;
console.log('Mnożenie:', multiply.toFixed(2));
if(multiply > 20) {
    console.log('Wynik jest większy od 20');
} else {
    console.log('Wynik jest mniejszy od 20');
}
// typ
console.log('Typ:', typeof multiply);

// Dzielenie
const division = c / b;
console.log('Dzielenie:', division.toFixed(2));
if(division > 20) {
    console.log('Wynik jest większy od 20');
} else {
    console.log('Wynik jest mniejszy od 20');
}
// typ
console.log('Typ:', typeof division);