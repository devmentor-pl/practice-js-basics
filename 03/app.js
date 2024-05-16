const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(x, y, z) {
	const xInt = parseInt(x);
	const yInt = parseInt(y);
	const zInt = parseInt(z);

	const numbers = [xInt, yInt, zInt];
	console.log(
		numbers.sort(function (a, b) {
			return a - b;
		})
	);
	return numbers[1] + numbers[2];
}

const result = getSum(a, b, c);
console.log(result);

const isEvan = function (x) {
	if (typeof x !== "number") {
		return null;
	} else {
		if (x % 2 === 1) {
			return false;
		} else {
			return true;
		}
	}
};

console.log(isEvan(6));

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
