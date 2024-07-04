const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const isEven = function (number) {
	if (typeof number === 'number') {
		return number % 2 === 0 ? true : false;
	} else if (typeof number !== 'number') {
		return null;
	}
};

console.log(`maszyna losująca wylosowała liczby a: ${a}, b: ${b}, c: ${c}`);
const sum = getSum(a, b, c);
console.log(`wynik dodania dwóch największych liczb to: ${result}`);
console.log(`czy wynik jest parzysty: ${isEven(result)}`);

const even = isEven(sum);
console.log(`///// podsumowanie za pomocą funkcji showInfo(${sum}, ${even}):`);
showInfo(sum, even);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getSum(a, b, c) {
	const aInt = parseInt(a);
	const bInt = parseInt(b);
	const cInt = parseInt(c);

	const arrDescending = [aInt, bInt, cInt];
	arrDescending.sort((a, b) => b - a);
	console.log(`sortujemy je od największej ${arrDescending}`);
	return (result = arrDescending[0] + arrDescending[1]);
}

function showInfo(x, y) {
	switch (y) {
		case null:
			console.log(`Podany argument ${x} nie jest liczbą.`);
			break;
		case true:
			console.log(`Podany argument ${x} jest parzysty.`);
			break;
		case false:
			console.log(`Podany argument ${x} jest nieparzysty.`);
			break;
		default:
			console.log(`Podany argument ${x} jest błędny.`);
	}
}
