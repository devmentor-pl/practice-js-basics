const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getSum(a, b, c) {
	const arr = [a, b, c];
	arr.sort((a, b) => a - b);
	const sum = arr[1] + arr[2];
	return sum;
}

function isEven(sum) {
	if (typeof sum !== 'number') return null;
	return sum % 2 === 0;
}

function showInfo(sum, even) {
	switch (even) {
		case null:
			console.log(`Given argument ${sum} is not a number.`);
			break;
		case true:
			console.log(`Given argument ${sum} is even.`);
			break;
		case false:
			console.log(`Given argument ${sum} is odd.`);
	}
}

console.log(getSum(a, b, c));

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);
