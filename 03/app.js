const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(x, y, z) {
	const arr = [parseInt(x), parseInt(y), parseInt(z)];
	arr.sort(function (a, b) {
		return b - a;
	});
	return arr[0] + arr[1];
}

const isEven = function (x) {
	if (typeof x === 'number') {
		if (x % 2 == 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return null;
	}
};

function showInfo(x, y) {
	switch (y) {
		case true:
			console.log(`Podany argument ${x} jest parzysty`);
			break;
		case false:
			console.log(`Podany argument ${x} jest nieparzysty`);
			break;
		default:
			console.log(`Podany argument ${x} nie jest liczbą`);
	}
}

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);
