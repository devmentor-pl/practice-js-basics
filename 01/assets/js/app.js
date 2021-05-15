const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const c = parseFloat(a);

const sum = c + b;
console.log(sum);

const substraction = b - c;
console.log(substraction);

const multiplication =  c * b;
const multiplication2 =  a * b; // niejawna zamiana typów
console.log(multiplication);
console.log(multiplication2);

const division = b / c;
const division2 = b / a; // niejawna zamiana typów
console.log(division)
console.log(division2);

const modulo = b % c;
console.log(modulo);

let z = b;

console.log(sum > 20 ? 'wynik sumowania jest większy od 20' : 'wynik sumowania jest mniejszy od 20');
console.log(substraction > 20 ? 'wynik odejmowania jest większy od 20' : 'wynik odejmowania jest mniejszy od 20');
console.log(multiplication > 20 ? 'wynik mnożenia jest większy od 20' : 'wynik mnożenia jest mniejszy od 20');
console.log(division > 20 ? 'wynik dzielenia jest większy od 20' : 'wynik dzielenia jest mniejszy od 20');
console.log(modulo > 20 ? 'wynik reszty z dzielenia jest większy od 20' : 'wynik reszty z dzielenia jest mniejszy od 20');


