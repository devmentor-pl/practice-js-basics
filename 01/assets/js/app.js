const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

const c = parseInt(a)
const result1 = c + b;
console.log('Wynik dodawania wynosi ' + result1);

const result2 = a - b;
console.log('Wynik odejmowanie wynosi ' + result2);

const result3 = a * b;
console.log('Wynik mnożenia wynosi ' + result3);

const result4 = a / b;
console.log('Wynik dzielenia wynosi ' + result4);

const result5 = b % a;
console.log('Reszta z dzielenia wynosi ' + result5);

if(result1 > 20) {
    console.log('Wynik dodawania jest większy od 20')
} else console.log('Wynik dodawania jest mniejszy od 20');

if(result2 > 20) {
    console.log('Wynik odejmowania jest większy od 20')
} else console.log('Wynik odejmowania jest mniejszy od 20');

if(result3 > 20) {
    console.log('Wynik mnożenia jest większy od 20')
} else console.log('Wynik mnożenia jest mniejszy od 20');

if(result4 > 20) {
    console.log('Wynik dzielenia jest większy od 20')
} else console.log('Wynik dzielenia jest mniejszy od 20');

if(result5 > 20) {
    console.log('Reszta z dzielenia jest większa od 20')
} else console.log('Reszta z dzielenia jest mniejsza od 20');