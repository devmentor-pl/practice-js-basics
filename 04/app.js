const arr = createArray(10, 200);

function createArray(min, max) {
	const arr = [];

	for (let i = 0; i <= 20; i++) {
		let randomNumbers = Math.round(Math.random() * (max - min) + min);
		arr.push(randomNumbers);
	}
	return arr;
}

function getLargest(x) {
	x.sort((a, b) => {
		return b - a;
	});

	return x.slice(0, 10);
}
const largest = getLargest(arr);

function getAvg(arr) {
	return (
		arr.reduce((a, b) => {
			return a + b;
		}, 0) / arr.length
	);
}
console.log(getLargest(arr));
console.log(getAvg(largest));
