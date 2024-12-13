const a = '4.2';
const b = 9;
console.log(a, b);
console.log(typeof a, typeof b);
const add = parseFloat(a) + b;
console.log(add);

const sub = a - b;
console.log(sub);

const multiply = a * b;
console.log(multiply.toFixed(2));

const divided = a / b;
console.log(divided.toFixed(2));

const arr = [add, sub, multiply, divided];

arr.forEach(function (num) {
  if (num > 20) {
    console.log(`${num.toFixed(2)} jest większe od 20`);
  } else {
    console.log(`${num.toFixed(2)} jest mniejsze lub równe 20`);
  }
});