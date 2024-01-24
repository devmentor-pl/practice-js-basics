const a = '4.2';
const b = 9;

console.log(a, b);

// Sprawdzenie jakiego typu są zmienne
console.log(typeof a, typeof b);

// Operatory arytmetyczne:
// dodawanie:
const sum = Number(a) + b;
console.log(sum);
// odejmowanie:
const diff = a - b;
console.log(diff);
// mnożenie:
const prod = a * b;
console.log(prod.toFixed(2));
// dzielenie:
const quot = a / b;
console.log(quot);
// reszta z dzielenia:
const rem = a % b;
console.log(rem);

const arr = [sum, diff, prod, quot, rem];

arr.forEach(function(num) {
    if (num > 20){
        console.log(num + ' - ta liczba jest większa od 20');
    }
    else {
        console.log(num + ' - ta liczba jest równa lub mniejsza od 20');
    }});