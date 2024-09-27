const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const sum = parseFloat(a) + b;
const subtraction = parseFloat(a) - b;
const multiplication = parseFloat(a) * b;
const division = parseFloat(a) / b;
const modulo = parseFloat(a) % b;

console.log(sum, subtraction, multiplication, division, modulo);

if (sum > 20) {
	console.log('Wynik jest większy od 20');
} else {
	console.log('Wynik jest mniejszy od 20');
}

if (subtraction > 20) {
	console.log('Wynik jest większy od 20');
} else {
	console.log('Wynik jest mniejszy od 20');
}

if (multiplication > 20) {
	console.log('Wynik jest większy od 20');
} else {
	console.log('Wynik jest mniejszy od 20');
}

if (division > 20) {
	console.log('Wynik jest większy od 20');
} else {
	console.log('Wynik jest mniejszy od 20');
}

if (modulo > 20) {
	console.log('Wynik jest większy od 20');
} else {
	console.log('Wynik jest mniejszy od 20');
}
