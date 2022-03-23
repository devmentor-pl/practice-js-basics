const a = '4.2';
const b = 9;
let newA = parseFloat(a);

console.log(`Zmienna a jest typu ${typeof a}`);
console.log(`Zmienna b jest typu ${typeof b}`);

let rest1 = a + b; // add
console.log(`a + b = ${rest1} (wystąpiła konkatynacja)`);
console.log(`Zmienna newA jest typu ${typeof newA}`);

let rest2 = newA + b; // add
console.log(`newA + b = ${rest2}`);
console.log(`Wynik dodawania jest ${rest2 > 20 ? "większy od 20" : "mniejszy od 20"}`);

let rest3 = a - b; // deduct
console.log(`a - b = ${rest3}`);
console.log(`Wynik odejmowania jest ${rest3 > 20 ? "większy od 20" : "mniejszy od 20"}`);

let rest4 = a * b; // multiply
console.log(`a * b = ${rest4}`);
console.log(`Wynik mnozenia jest ${rest4 > 20 ? "większy od 20" : "mniejszy od 20"}`);

let rest5 = a / b; // divide
console.log(`a / b = ${rest5}`);
console.log(`Wynik dzielenia jest ${rest5 > 20 ? "większy od 20" : "mniejszy od 20"}`);

let rest6 = a % b; // modulo
console.log(`a % b = ${rest6}`);
console.log(`Wynik modulo jest ${rest6 > 20 ? "większy od 20" : "mniejszy od 20"}`);