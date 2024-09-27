const a = '4.2';
const b = 9;
console.log('a =', a);
console.log('b =', b);
console.log('stała "a" to jest:', typeof a);
console.log('stała "b" to jest:', typeof b);

const plus = a + b;
console.log('a' + ' ' + '+' + ' ' + 'b =', plus);

const plus2 = Number(a) + b;
console.log('a' + ' ' + '+' + ' ' + 'b =', plus2);

if (plus2 > 20) {
	console.log('Wynik dodawania jest większy od 20.');
} else {
	console.log('Wynik dodawania nie jest większy od 20.');
}

const substract = a - b;
console.log('a' + ' ' + '-' + ' ' + 'b =', substract);

if (substract > 20) {
	console.log('Wynik odejmowania jest większy od 20.');
} else {
	console.log('Wynik odejmowania nie jest większy od 20.');
}

const divide = a / b;
console.log('a' + ' ' + '/' + ' ' + 'b =', divide);

if (divide > 20) {
	console.log('Wynik dzielenia jest większy od 20.');
} else {
	console.log('Wynik dzielenia nie jest większy od 20.');
}

const multiply = a * b;
console.log('a' + ' ' + '*' + ' ' + 'b =', multiply);

if (multiply > 20) {
	console.log('Wynik mnożenia jest większy od 20.');
} else {
	console.log('Wynik mnożenia nie jest większy od 20.');
}

const modulo = a % b;
console.log('a' + ' ' + '%' + ' ' + 'b =', modulo);

if (modulo > 20) {
	console.log('Wynik modulo jest większy od 20.');
} else {
	console.log('Wynik modulo nie jest większy od 20.');
}
