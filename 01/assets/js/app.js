const a = "4.2";
const b = 9;

console.log(typeof a, typeof b);

const sum = a + b;
const sub = a - b;
const multi = a * b;
const div = a / b;

console.log(sum);
console.log(sub);
console.log(multi);
console.log(div);

if (sum > 20) console.log(`Wynik ${sum} jest większy niż 20`);
if (sub > 20) console.log(`Wynik ${sub} jest większy niż 20`);
if (multi > 20) console.log(`Wynik ${multi} jest większy niż 20`);
if (div > 20) console.log(`Wynik ${div} jest większy niż 20`);
