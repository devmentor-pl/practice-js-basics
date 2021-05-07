const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getSum(a, b, c) {
	let arr = [ parseInt(a), parseInt(b), parseInt(c) ];
	let newArr = arr.splice(arr.indexOf(arr.find((x) => x == Math.min(...arr))), 1);
	return newArr.reduce((r, e) => r + e, 0);
}

let isEven = (number) => {
	if (typeof number !== 'number') return null;
	return number % 2 == 0 ? true : false;
};

const sum = getSum(a, b, c);

const even = isEven(sum);

let showInfo = (sum, even) => {
	switch (even) {
		case null:
			console.log(`Podany argument ${sum} nie jest liczbą`);
			break;
		case true:
			console.log(`Podany argument ${sum} jest parzysty`);
			break;
		case false:
			console.log(`Podany argument ${sum} jest nieparzysty`);
			break;
		default:
			break;
	}
};

showInfo(sum, even);
