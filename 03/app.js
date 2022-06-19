const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(x, y, z) {
	const numbersArr = [x, y, z];
	const integerNum = numbersArr
		.map(function (el) {
			return parseInt(el);
		})
		.sort(function (a, b) {
			return b - a;
		})
		.slice(0, 2)
		.reduce(function (acc, el) {
			return acc + el;
		});
	return integerNum;
}

const isEven = function (num) {
	if (isNaN(num)) {
		console.log(`the ${num} is not a number`);
		return null;
	} else if (!isNaN(num) && num % 2 === 0) {
		console.log(`${num} is even`);
		return true;
	} else {
		console.log(`${num} is Odd`);
		return false;
	}
};

const showInfo = function (value, valueDescription) {
	switch (valueDescription) {
		case null:
			console.log(`the ${value} is not a number`);
			break;
		case true:
			console.log(`the ${value} is even number`);
			break;
		case false:
			console.log(`the ${value} is odd number`);
			break;
	}
};
const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
