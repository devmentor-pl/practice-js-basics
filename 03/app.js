const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const sum = getSum(a, b, c);

function getSum(a, b, c) {
	const sortedParams = [a, b, c].sort((x, y) => y - x);
	const sumSortedParams = sortedParams[0] + sortedParams[1];
	return sumSortedParams;
}
const isEven = function (num) {
	if (typeof num === 'number') {
		if (num % 2 === 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return null;
	}
};
const even = isEven(sum);

function showInfo(param, boolean) {
	switch (boolean) {
		case null:
			console.log(`Podany argument ${param} nie jest liczbą`);
			break;
		case true:
			console.log(`Podany argument ${param} jest parzysty`);
			break;
		case false:
			console.log(`Podany argument ${param} jest nieparzysty`);
			break;
	}
}

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

showInfo(sum, even);
