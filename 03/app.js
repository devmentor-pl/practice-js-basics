const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
	const aInt = parseInt(a);
	const bInt = parseInt(b);
	const cInt = parseInt(c);

	const arrDescending = [aInt, bInt, cInt];
	arrDescending.sort((a, b) => b - a);
	console.log(arrDescending);
	return (result = arrDescending[0] + arrDescending[1]);
}

getSum(a, b, c);
console.log(result);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
