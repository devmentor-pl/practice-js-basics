const a = '4.2';
let b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

const sum = 2 + 5;
const concat = 97 + '4.2';
const sub = 5 - 120;
const div = 10 / 5;
const mult = 6 * 9;
const mod = 5 % 3;
const incrementation = b++;
const decrementation = b--;

const arr = [sum, concat, sub, div, mult, mod, incrementation, decrementation];

console.log(arr);

arr.forEach((num) =>
	num > 20
		? console.log(`${num} is greater than 20`)
		: console.log(`${num} is lower than 20`)
);
