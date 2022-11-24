const min = 1;
const max = 30;

const arr = createArray(min, max);
const largestNumbers = getLargestNumbers(arr);
const avg = getAvg(largestNumbers);

console.log(arr);
console.log(largestNumbers);
console.log(avg);

function createArray(min, max) {
	const arr = [];
	for (let i = 1; i <= 20; i++) {
		const randomNumber = Math.round(Math.random(min, max) * (max - min) + min);
		arr.push(randomNumber);
	}
	return arr;
}

function getLargestNumbers(array) {
	array.sort(function (a, b) {
		return b - a;
	});

	return array.slice(0, 10);
}

function getAvg(arr) {
	let sum = 0;
	arr.forEach((num) => {
		sum += num;
	});
	return sum / arr.length;
}
