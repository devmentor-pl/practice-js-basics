const createArray = (min, max) => {
	const result = [];
	for (let i = 0; i < 20; i++) {
		const randomNumbers = Math.floor(Math.random() * (max - min + 1)) + 1;

		result.push(randomNumbers);
	}
	return result;
};

const array = createArray(1, 100);
console.log(array);

const getLargest = (arr) => {
	const sortedArray = arr.sort((a, b) => b - a);
	const largestNumbers = sortedArray.slice(0, 10);
	return largestNumbers;
};

const newArray = getLargest(array);
console.log(newArray);

const getAvg = (arr) => {
	return (
		arr.reduce((acc, curr) => {
			return acc + curr;
		}, 0) / arr.length
	);
};

const avg = getAvg([1, 2, 3, 4, 5]);
console.log(avg);

//  --------------------------FOREACH-------------------
// const getAvg = (arr) => {
// 	let sum = 0;
// 	arr.forEach((el) => {
// 		sum += el
// 	});
// 	return sum / arr.length
// };

// const avg = getAvg([1, 2, 3, 4,5]);
// console.log(avg);
