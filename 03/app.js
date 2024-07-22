const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);
// const a = 4;
// const b = 25;
// const c = 14;

console.log(a, b, c);

function getSum(a, b, c) {
	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);

	let numbers = [a, b, c];
	numbers.sort((x, y) => y - x);
	let twoLargest = numbers.slice(0, 2);

	let result = twoLargest[0] + twoLargest[1];

	return result;
}

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

const even = function(number) {
	if (typeof number !== 'number') {
		return null;
	}
	return number % 2 === 0;
};

console.log(even(4));      // Output: true
console.log(even(7));      // Output: false
console.log(even("test")); // Output: null
console.log(even(2.4));    // Output: false (działa poprawnie dla liczb zmiennoprzecinkowych)

function showInfo(info, result) {
	switch (result) {
		case null:
			console.log(`Podany argument ${info} nie jest liczbą`);
			break;
		case true:
			console.log(`Podany argument ${info} jest parzysty`);
			break;
		case false:
			console.log(`Podany argument ${info} jest nieparzysty`);
			break;
		default:
			console.log(`Podany argument ${info} ma nieznany status`);
	}
}



// Obliczanie sumy
const sum = getSum(a, b, c);

// Sprawdzanie, czy suma jest parzysta
const evenResult = even(sum);

// Wyświetlanie informacji
showInfo(sum, evenResult);
