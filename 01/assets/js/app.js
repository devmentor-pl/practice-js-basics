const a = "4.2";
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const sum = parseFloat(a) + b;
const sub = parseFloat(a) - b;
const mul = parseFloat(a) * b;
const div = parseFloat(a) / b;
const mod = parseFloat(a) % b;

console.log(sum, sub, mul, div, mod);

if (sum > 20) {
  console.log("Wynik jest wiekszy niz 20");
} else {
  console.log("Wynik jest mniejszy niz 20");
}

if (sub > 20) {
  console.log("Wynik jest wiekszy niz 20");
} else {
  console.log("Wynik jest mniejszy niz 20");
}

if (mul > 20) {
  console.log("Wynik jest wiekszy niz 20");
} else {
  console.log("Wynik jest mniejszy niz 20");
}

if (div > 20) {
  console.log("Wynik jest wiekszy niz 20");
} else {
  console.log("Wynik jest mniejszy niz 20");
}

if (mod > 20) {
  console.log("Wynik jest wiekszy niz 20");
} else {
  console.log("Wynik jest mniejszy niz 20");
}
