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

function sortArray(array) {
	const sorted = array.sort(function (a, b) {
		return b - a;
	});
	console.log(sorted);

	return sorted.slice(0, 10);
}

const sortedArray = sortArray(arr);
console.log(sortedArray);
