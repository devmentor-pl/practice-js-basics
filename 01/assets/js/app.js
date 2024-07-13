const a = "4.2";
const b = 9;
let aAsNum = Number(a);

console.log(a, b);

console.log(typeof a, typeof b);

const sum = aAsNum + b;
const concatention = a + b;
const diff = a - b;
const product = a * b;
const quotient = a / b;
const rest = b % a;
let incrementum = aAsNum;
incrementum++;
let decrementation = b;
decrementation--;

const arr = [
  sum,
  concatention,
  diff,
  product,
  quotient,
  rest,
  incrementum,
  decrementation,
];

console.log(arr);

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] > 20) {
    console.log("Większe od 20");
  } else {
    console.log("Nie jest wieksze od 20");
  }
}
