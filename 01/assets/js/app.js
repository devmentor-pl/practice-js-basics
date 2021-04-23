const a = '4.2';
const b = 9;

console.log(a, b);

//- sprawdź jakiego typu są to zmienne - użyj `typeof`
console.log(typeof a, typeof b)

//- wykonaj działania dla każdego operatora arytmetycznego jaki znasz.
// - Każdy wynik zapisz do osobnej zmiennej
// - Sprawdź czy wyniki są prawidłowe
//     - Jeśli tak, nic nie rób
//     - Jeśli nie, rozwiąż problem

let sum = parseFloat(a, 10) + parseFloat(b, 10);
let difference = parseFloat(a, 10) - parseFloat(b, 10);
let product = ((parseFloat(a, 10) * 10) * parseFloat(b, 10)) / 10;
let quotient = parseFloat(a, 10) / parseFloat(b, 10);
let modulo = parseFloat(a, 10) % parseFloat(b, 10);
let powerA = Math.pow(parseFloat(a, 10), 2);
let powerB = Math.pow(parseFloat(b, 10), 2);
let squareRootA = Math.sqrt(parseFloat(a, 10));
let squareRootB = Math.sqrt(parseFloat(b, 10));

console.log('sum: ' + sum)
console.log('difference: ' + difference)
console.log('product: ' + product)
console.log('quotient: ' + quotient)
console.log('modulo: ' + modulo)
console.log('powerA: ' + powerA)
console.log('powerB: ' + powerB)
console.log('squareRootA: ' + squareRootA)
console.log('squareRootB: ' + squareRootB)

// - użyj instrukcji warunkowej, aby sprawdzić, który z wyników jest większy od 20, a który mniejszy
// - wykonaj to w taki sposób, aby zmiana wartości podczas deklaracji dla `a` oraz `b` nie wpłynęła na poprawność działanie Twojego kodu

if (sum > 20) {
    console.log('the sum is greater than 20!')
} else {
    console.log('the sum is less than 20')
}
if (difference > 20) {
    console.log('the difference is greater than 20!')
} else {
    console.log('the difference is less than 20')
}
if (product > 20) {
    console.log('the product is greater than 20!')
} else {
    console.log('the product is less than 20')
}
if (quotient > 20) {
    console.log('the quotient is greater than 20!')
} else {
    console.log('the quotient is less than 20')
}
if (modulo > 20) {
    console.log('the modulo is greater than 20!')
} else {
    console.log('the modulo is less than 20')
}
if (powerA > 20) {
    console.log('the powerA is greater than 20!')
} else {
    console.log('the powerA is less than 20')
}
if (powerB > 20) {
    console.log('the powerB is greater than 20!')
} else {
    console.log('the powerB is less than 20')
}
if (squareRootA > 20) {
    console.log('the squareRootA is greater than 20!')
} else {
    console.log('the squareRootA is less than 20')
}
if (squareRootB > 20) {
    console.log('the squareRootB is greater than 20!')
} else {
    console.log('the squareRootB is less than 20')
}

