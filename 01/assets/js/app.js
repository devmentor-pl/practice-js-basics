const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

const convertedA = parseFloat(a);

const addNumbers = convertedA + b;
const subtractNumbers = convertedA - b;
const multiplyNumbers = convertedA * b;
const divideNumbers = convertedA / b;
const moduloNumbers = b % convertedA;


console.log(
    addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, moduloNumbers);

if (addNumbers > 20) {
    console.log("Hurra! wynik dodawania jest wiekszy od 20");
} else {
    console.log("Niestety, tym razem wynik dodawania jest mniejszy niz 20");
}
      
if (subtractNumbers > 20) {
    console.log("Hurra! wynik odejmowania jest wiekszy od 20");
} else {
    console.log("Niestety, tym razem wynik odejmowania jest mniejszy niz 20")
}

if(multiplyNumbers>20) {
    console.log("Hurra! wynik mnozenia jest wiekszy od 20");
} else {
    console.log("Niestety, tym razem wynik mnozenia jest mniejszy niz 20");
}

if(divideNumbers>20) {
    console.log("Hurra! wynik dzielenia jest wiekszy od 20");
} else {
    console.log("Niestety, tym razem wynik dzielenia jest mniejszy niz 20");
}

if(moduloNumbers>20) {
    console.log("Hurra! reszta z dzielenia jest wieksza od 20");
} else {
    console.log("Niestety, tym razem reszta z dzielenia jest mniejsza niz 20");
}
