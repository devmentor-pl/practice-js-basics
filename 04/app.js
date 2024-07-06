const min = 10;
const max = 200;
const arr = [];

const newArray = (min, max) => {
	for (let i = 0; i < 20; i++) {
		let number = Math.round(Math.random() * (max - min) + min);
		arr.push(number);
	}
	return arr;
};

newArray(min, max);
console.log(arr);

function getLargest(arr) {
	return arr.sort((a, b) => b - a).slice(0, 10);
}

const largest = getLargest(arr);
console.log(largest);

function getAvg(arr) {
	let sum = 0;
	arr.forEach((num) => {
		return (sum += num);
	});
	return sum / arr.length;
}

const avg = getAvg(largest);
console.log(avg);
