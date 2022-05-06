const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(num1, num2, num3) {
	const arr = [parseInt(num1), parseInt(num2), parseInt(num3)];
	arr.sort((a, b) => a - b);
	return arr[1] + arr[2];
}



const isEven = function (number) {
	if (number === null) {
		return null;
	}
	if (number % 2 === 0) {
		return true;
	}

	if (number % 2 !== 0) {
		return false;
	}
};



function showInfo(val1, val2) {
	switch (val2) {
		case null:
			console.log(`Podany argument ${val1} nie jest liczbą`);
			break;
		case true:
			console.log(`Podany argument ${val1} jest parzysty`);
			break;
		case false:
			console.log(`Podany argument ${val1} jest nieparzysty`);
			break;
	}
}

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}


const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);