function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function createArray(min, max) {
	let tempArr = [];
	for (let i = 0; i < 20; i++) {
		tempArr.push(randomNumber(min, max));
	}
	return tempArr;
}

const getLargest = (arr) => {
	return arr.sort((a, b) => b - a).slice(0, 10);
};

const getAvg = (arr) => {
	return arr.reduce((aq, el) => aq + el, 0) / arr.length;
};

let arr = createArray(10, 200);
console.log(arr);

let largest = getLargest(arr);
console.log(largest);

let avg = getAvg(largest);
console.log(avg);
