const arr = createArray(10, 200);
console.log(arr);
const largest = getLargest(arr);
console.log(largest);
const avg = getAvg(largest);
console.log(avg);


function createArray(min, max) {
	let arr = [];
	for (let i = 0; i < 20; i++) {
		arr.push(Math.floor(Math.random() * (max - min)));
	}
	return arr;
}


function getLargest(arr) {
	arr.sort(function (a, b) {
		return b - a;
	});

	return arr.slice(0, 10);
}


function getAvg(arr) {
	const avg = arr.reduce((a, b) => a + b);
	return avg / arr.length;
}
