const a = "4.2";
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const sum = parseFloat(a) + b;
console.log(sum);

const diff = a - b;
console.log(diff);

const multiply = a * b;
console.log(multiply);

const divide = b / a;
console.log(divide);

const mod = b % a;
console.log(mod);

if (sum > 20) {
	console.log(sum + " is more than 20");
} else {
	console.log(sum + " is less than 20");
}

if (diff > 20) {
	console.log(diff + " is more than 20");
} else {
	console.log(diff + " is less than 20");
}

if (multiply > 20) {
	console.log(multiply + " is more than 20");
} else {
	console.log(multiply + " is less than 20");
}

if (divide > 20) {
	console.log(divide + " is more than 20");
} else {
	console.log(divide + " is less than 20");
}

if (mod > 20) {
	console.log(mod + " is more than 20");
} else {
	console.log(mod + " is less than 20");
}
