const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

const getSum = (a, b, c) => {
	const numA = parseInt(a);
	const numB = parseInt(b);
	const numC = parseInt(c);

	const intArray = [numA, numB, numC];
	intArray
		.sort((a, b) => {
			return b - a;
		})
		.pop();

	const sumFromArray = intArray.reduce((previousVal, currentVal) => previousVal + currentVal, 0);
	return sumFromArray;
};
const sum = getSum(a, b, c);

const isEven = function (number) {
	if (!Number.isSafeInteger(number)) return null;
	// if (typeof number === 'number') return null;

	const oddOrEven = number % 2;

	if (oddOrEven === 0) return true;
	else return false;
};
const even = isEven(sum);

const showInfo = (value, secondValue) => {
	if (!(secondValue === false || secondValue === null || secondValue === true)) return;

	switch (secondValue) {
		case null:
			console.log('Given argument' + ' ' + value + ' ' + "isn't a number");
			break;
		case false:
			console.log(`Given argument ${value} is a odd number`);
			break;
		case true:
			console.log(`Given argument ${value} is a even number`);
			break;

		default:
			break;
	}
};
showInfo(sum, even);
