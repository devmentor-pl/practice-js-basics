function createArray(min, max) {
	let arr = [];

	for (let i = 1; i <= 20; i++) {
		let randomNumber = Math.round(Math.random() * (max - min + 1) + min);

		arr.push(randomNumber);
	}
	const sortedArr = arr.sort(function (a, b) {
		return a - b;
	});

	return sortedArr;
}

const arr = createArray(1, 100);
console.log(arr);
