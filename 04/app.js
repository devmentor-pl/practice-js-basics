function createArray(min, max) {
	let arrayNumbers = [];
	for (let i = 0; i < 20; i++) {
		arrayNumbers.push(Math.round(Math.random() * (max - min) + min));
	}
	return arrayNumbers;
}

const arr = createArray(1, 200);
console.log(arr);

function sortByLargest(arr) {
	arr.sort((x, y) => y - x);
	const slicedArray = arr.slice(0, 10);
	return slicedArray;
}

const largest = sortByLargest(arr);
console.log(largest);

function getAvg(arr) {
	const sum = arr.reduce((acc, curr) => acc + curr);
	return sum / 10;
}

const avg = getAvg(largest);
console.log(avg);
