function createArray(min, max) {
	let arr = [];

	for (let i = 1; i <= 20; i++) {
		let randomNumber = Math.round(Math.random() * (max - min + 1) + min);
		arr.push(randomNumber);
	}

	return arr;
}

const arr = createArray(1, 100);
console.log(arr);

function getLargest(array) {
	const sorted = array.sort(function (a, b) {
		return b - a;
	});
	console.log(sorted);

	return sorted.slice(0, 10);
}

const largest = getLargest(arr);
console.log(largest);

function getAvg(array) {
	const sumOfArray = array.reduce(function (acc, num) {
		return acc + num;
	});

	const avg = sumOfArray / array.length;
	return avg;
}

const avg = getAvg(largest);
console.log(avg);

const arr2 = createArray(10, 200);
console.log(arr2);

const largest2 = getLargest(arr2);
console.log(largest2);

const avg2 = getAvg(largest2);
console.log(avg2);
