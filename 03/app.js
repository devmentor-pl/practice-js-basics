const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);







function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const min = 1;
const max = 100;

// const a = randomNumber(min, max);
// const b = randomNumber(min, max);
// const c = randomNumber(min, max);

// console.log(a, b, c);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getSum(a, b, c) {
	return a + b + c;
}

console.log(getSum(2, 4, 6));

const isEven = (number) => {
	if (typeof number !== "number") {
		return null;
	}
	if (number % 2 === 0) {
		return true;
	}
	return false;
};

console.log(isEven(4));

const showInfo = (value, condition) => {
	switch (condition) {
		case null:
			console.log(`podana wartość ${value} nie jest liczbą`);
			break;
		case true:
			console.log(`podana liczba ${value} jest parzysta`);
			break;
		case false:
			console.log(`podana liczba ${value} nie jest parzysta`);
		default:
			console.log(`nieprawidłowe wartości`);
	}
};

console.log(showInfo("12", true));