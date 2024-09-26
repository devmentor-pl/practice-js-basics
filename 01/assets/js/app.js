const a = '4.2';
const b = 9;

console.log(typeof a, '=', a);
console.log(typeof b, '=', b);

console.log('__Operator arytmetyczny__');

const parseA = parseFloat(a);
const parseB = parseFloat(b);

const add = parseA + parseB;

const subtract = parseA - parseB;

const multip = Number((parseA * parseB).toFixed(2));

const division = Number((parseA / parseB).toFixed(2));

const modulo = parseA % parseB;

let arr = [add, subtract, multip, division, modulo];
console.log(...arr);

const testNumber = 20;

for (const number of arr) {
  if (number > testNumber) {
    console.log(`${number}` + ' jest większa ' + `${testNumber}`);
  } else {
    console.log(`${number}` + ' jest mniejsza niż ' + `${testNumber}`);
  }
}
