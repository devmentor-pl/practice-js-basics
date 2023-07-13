const a = "4.2";
const b = 9;

console.log("a =", typeof a);
console.log("b =", typeof b);

const add = Number(a) + b;
const subtract = Number(a) - b;
const multiplication = a * b;
const division = a / b;
const modulo = a % b;
const exponentiation = a ** b;

const arr = [add, subtract, multiplication, division, modulo, exponentiation];

const result = arr.filter(checkNum);

function checkNum(num) {
  if (num > 20) {
    console.log(`${num} > 20`);
  } else {
    console.log(`${num} < 20`);
  }
}
