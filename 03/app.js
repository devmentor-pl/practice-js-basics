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
