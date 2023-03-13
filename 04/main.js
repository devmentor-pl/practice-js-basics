`use strict`;

const createArray = (min, max) => {
	const array = [];
	for (let i = 1; i <= 20; i++) {
		const number = Math.round(Math.random() * (max - min) + min);
		array.push(number);
	}
	return array;
};
const array = createArray(1, 10);

const getLargestNumbersFromArray = arrayWithNumbers => {
	const halfOfArray = arrayWithNumbers.length / 2;
	const sortedArray = arrayWithNumbers
		.sort((a, b) => {
			return a - b;
		})
		.slice(halfOfArray);
	return sortedArray;
};

const largest = getLargestNumbersFromArray(array);

const calcAvg = arrayWithNumbers => {
	let acc = 0;
	// const avgWithReduce = arrayWithNumbers.reduce((acc, curr) => (acc + curr) / arrayWithNumbers.length, 0);
	// return avgWithReduce;
	arrayWithNumbers.forEach(number => (acc += number));
	
	// acc = 0;
	if (acc === 0) return console.error('Wrong number');
	return acc / arrayWithNumbers.length;
};

console.log(calcAvg(largest));
