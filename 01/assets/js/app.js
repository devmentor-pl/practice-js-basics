const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a)
console.log(typeof b)

let numA = parseFloat (a);
let numB = b;
console.log(typeof numA, numA);

let add = numA + numB;
console.log(`a + b = ${add}`);
if (add > 20) {
  console.log(`wynik ${add} większy od 20`)
} else { console.log(`wynik ${add} mniejszy od 20`)}

let sub = numA - numB;
console.log(`a - b = ${sub}`);
if (sub > 20) {
  console.log(`wynik ${sub} większy od 20`)
} else { console.log(`wynik ${sub} mniejszy od 20`)}

let multi = (numA * numB).toFixed(2);
console.log(`a * b = ${multi}`);
if (multi > 20) {
  console.log(`wynik ${multi} większy od 20`)
} else { console.log(`wynik ${multi} mniejszy od 20`)}

let div = (numA / numB).toFixed(2);
console.log(`a / b = ${div}`);
if (div > 20) {
  console.log(`wynik ${div} większy od 20`)
} else { console.log(`wynik ${div} mniejszy od 20`)}

let modulo = numA % numB;
console.log(`a % b = ${modulo}`);

//tu troche zmienilem zamiast sprawdzania czy wieksze od 20;)

let modulo2 = numA > numB ? 
  console.log(`numA % numB = ${numA % numB}`) : console.log(`numB % numA = ${(numB % numA).toFixed(2)}`);




