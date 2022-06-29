const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

// console.log(a, b, c);

function getSum(x, y, z) {
	let xInt = parseInt(x);
	let yInt = parseInt(y);
	let zInt = parseInt(z);

	const numbers = [xInt, yInt, zInt];
	numbers.sort((a, b) => {
		return b - a;
	});

	let result = numbers[0] + numbers[1];
	return result;
}

const isEven = (par) => {
	if (typeof par !== "number") {
		return null;
	} else if (par % 2 == 0) {
		return true;
	}

	return false;
};

function showInfo(x, y) {
	switch (y) {
		case null:
			console.log(`Podany argument ${x} nie jest liczbą`);
			break;
		case true:
			console.log(`Podany argument ${x} jest parzysty`);
			break;
		case false:
			console.log(`Podany argument ${x} jest nieparzysty`);
			break;
	}
}
function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);
