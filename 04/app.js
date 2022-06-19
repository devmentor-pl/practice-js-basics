const getRandomNumArr = function (min, max) {
	const randomNumbers = [];
	for (let i = 1; i <= 20; i++) {
		let randomNum = Math.round(Math.random() * (max - min) + min);
		randomNumbers.push(randomNum);
	}
	return randomNumbers;
};

const getTenLargest = function (arr) {
	return arr
		.sort(function (a, b) {
			return b - a;
		})
		.slice(0, 10);
};

const getAvg = function (arr) {
	let avg = arr.reduce(function (acc, current) {
		return acc + current;
	});
	return avg / arr.length;
};

const numbersArr = getRandomNumArr(10, 200);
console.log(numbersArr);
const tenLargest = getTenLargest(numbersArr);
const avg = getAvg(tenLargest);
console.log(tenLargest);
console.log(avg);
