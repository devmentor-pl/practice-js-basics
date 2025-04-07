let a = '4.2';
let b = 9;

console.log(typeof a, typeof b);

const concat = a + b;
console.log('Wynik konkatenacji:', concat);

if (concat > 20) {
  console.log('Wynik konkatenacji jest większy od 20');
} else {
  console.log('Wynik konkatenacji jest mniejszy od 20');
}

a = parseFloat(a);

const add = a + b;
console.log('Wynik dodawania:', add);

if (add > 20) {
  console.log('Wynik dodawania jest większy od 20');
} else {
  console.log('Wynik dodawania jest mniejszy od 20');
}

const substract = a - b;
console.log('Wynik odejmowania:', substract);

if (substract > 20) {
  console.log('Wynik odejmowania jest większy od 20');
} else {
  console.log('Wynik odejmowania jest mniejszy od 20');
}

const multipli = a * b;
console.log('Wynik mnozenia:', multipli);

if (multipli > 20) {
  console.log('Wynik mnozenia jest większy od 20');
} else {
  console.log('Wynik mnozenia jest mniejszy od 20');
}

const divide = a / b;
console.log('Wynik dzielenia:', divide);

if (divide > 20) {
  console.log('Wynik dzielenia jest większy od 20');
} else {
  console.log('Wynik dzielenia jest mniejszy od 20');
}

const modulo = a % b;
console.log('wynik reszty z dzielenia:', modulo);

if (modulo > 20) {
  console.log('Wynik reszty z dzielenia jest większy od 20');
} else {
  console.log('Wynik reszty z dzielenia jest mniejszy od 20');
}

const inc = ++a;
console.log('Wynik inkrementacji:', inc);

if (inc > 20) {
  console.log('Wynik inkrementacji jest większy od 20');
} else {
  console.log('Wynik inkrementacji jest mniejszy od 20');
}

const dec = --b;
console.log('Wynik dekremenmtacji:', dec);

if (dec > 20) {
  console.log('Wynik dekrementacji jest większy od 20');
} else {
  console.log('Wynik dekrementacji jest mniejszy od 20');
}
