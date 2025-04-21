let a = '4.2';
let b = 9;

console.log(typeof a, typeof b);

const concat = a + b;
// console.log('Wynik konkatenacji:', concat);

a = parseFloat(a);

const add = a + b;
// console.log('Wynik dodawania:', add);

const substract = a - b;
// console.log('Wynik odejmowania:', substract);

const multipli = a * b;
// console.log('Wynik mnozenia:', multipli);

const divide = a / b;
// console.log('Wynik dzielenia:', divide);

const modulo = a % b;
// console.log('wynik reszty z dzielenia:', modulo);

const inc = ++a;
// console.log('Wynik inkrementacji:', inc);

const dec = --b;
// console.log('Wynik dekremenmtacji:', dec);

const arr = [concat, add, substract, multipli, divide, modulo, inc, dec];

const isBigger = [];
const isSmaller = [];

const checkResult = arr.map((item) => {
  if (item > 20) {
    isBigger.push(item);
  } else if (item < 20) {
    isSmaller.push(item);
  }
});

console.log('Wyniki działan większy niz 20', isBigger);
console.log('Wynik dzialan mniejszy niz 20', isSmaller);
