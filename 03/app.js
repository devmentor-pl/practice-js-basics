const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getSum(one, two, three) {
	const oneParsed = parseFloat(one);
	const twoParsed = parseFloat(two);
	const threeParsed = parseFloat(three);

	const numbersArr = [oneParsed, twoParsed, threeParsed];

	numbersArr.sort(function (a, b) {
		return a - b;
	});

	console.log(numbersArr[1] + numbersArr[2]);
	return numbersArr[1] + numbersArr[2];
}

const even = function isEven(num) {
	if (typeof num !== "number") {
		console.log(null);
		return null;
	} else if (num % 2 === 0) {
		console.log("true");
		return true;
	} else {
		console.log("false");
		return false;
	}
};

function showInfo(a, value) {
	switch (value) {
		case null:
			console.log("Podany argument " + value + " nie jest liczbą");
			break;
		case true:
			console.log("Podany argument " + value + " jest parzysty");
			break;

		case false:
			console.log("Podany argument " + value + " jest nieparzysty");
			break;
	}
}
