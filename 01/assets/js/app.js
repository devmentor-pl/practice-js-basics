const a = "4.2";
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

let sum = Number(a) + b;
let sub = a - b;
let multi = a * b;
let div = a / b;
let modulo = Number(a) % b;

console.log(sum, sub, multi, div, modulo);

const results = [sum, sub, multi, div, modulo];

results.forEach((i) => {
	i > 20
		? console.log(`${i} jest większe od 20`)
		: console.log(`${i} jest mniejsze od 20`);
});
