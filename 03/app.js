const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

function getSum(a, b, c) {
	let x = parseInt(a);
	let y = parseInt(b);
	let z = parseInt(c);

	console.log("Wszystkie liczby:", x, y, z);

	let biggest = Math.max(x, y, z);

	if (x === biggest) {
		x = -Infinity;
	} else if (y === biggest) {
		y = -Infinity;
	} else {
		z = -Infinity;
	}

	let secondBiggest = Math.max(x, y, z);

	console.log("Największe liczby to:", biggest, " i ", secondBiggest);

	return biggest + secondBiggest;
}

// const sum = getSum(a, b, c);
// console.log("Suma dwóch największych liczb =", sum);

// funkcja o nazwie "isEven"

const isEven = function (par) {
	if (typeof par !== "number") {
		return null;
	}

	if (par % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

// console.log(isEven(sum));

// funkcja o nazwie show info

function showInfo(par1, isEven) {
	switch (isEven) {
		case null:
			console.log("Podany argumnet " + par1 + " nie jest liczbą!");
			break;
		case true:
			console.log("Podany argument " + par1 + " jest liczba parzystą");
			break;
		case false:
			console.log("Podany argument " + par1 + " jest nieparzysty");
			break;
	}
}

const sum = getSum(a, b, c);
console.log("Suma dwóch największych liczb =", sum);

const even = isEven(sum);

showInfo(sum, even);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
