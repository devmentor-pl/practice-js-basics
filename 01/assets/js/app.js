const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof(a));
console.log(typeof (b));

console.log(Number('4.2'));

const aNumber = parseFloat(a);

const sum = aNumber + b;
console.log(sum);

const sub = aNumber - b;
console.log(sub);

const multi = aNumber * b;
console.log(multi);

const division = aNumber / b;
console.log(division);

// const result = sum > 20;
// console.log(result);

// const result2 = sub > 20;
// console.log(result2);

// const result3 = multi > 20;
// console.log(result3);

// const result4 = division > 20;
// console.log(result4);

if (sum > 20) {
	console.log('Sum is greater than 20');
} else {
	console.log('Sum is not greater than 20');
}

if (sub > 20) {
	console.log('Subtraction is greater than 20');
} else {
	console.log('Subtraction is not greater than 20');
}

if (multi > 20) {
	console.log('Multiplication is greater than 20');
} else {
	console.log('Multiplication is not greater than 20');
}

if (division > 20) {
	console.log('Division is greater than 20');
} else {
	console.log('Division is not greater than 20');
}