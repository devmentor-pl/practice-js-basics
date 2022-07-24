function rangeArr(min, max) {
	const newArr = [];
	for (let i = 0; i < 20; i++) {
		newArr.push(Math.round(Math.random() * (max - min + 1) + min));
	}
	return newArr;
}

const arr = rangeArr(10, 200);
console.log(arr);

function getLargest(arr) {
	return arr
		.sort((a, b) => a - b)
		.reverse()
		.slice(0, 10);
}

const biggestArr = getLargest(arr);
console.log(biggestArr);

function getAvg(arr) {
	return arr.reduce((total, item) => (total += item), 0) / arr.length;
}

console.log(getAvg(biggestArr));