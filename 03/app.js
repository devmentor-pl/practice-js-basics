const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

// Funkcja getSum

function getSum(a, b, c) {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

	if (a > b) {
		max_no1 = a;
		max_no2 = b;
	} else {
		max_no1 = b;
		max_no2 = a;
	}

	if (c > max_no1 && c > max_no2) {
		max_no2 = max_no1;
		max_no1 = c;
	} else if (c < max_no1 && c > max_no2) {
		max_no2 = c;
	}
	let sum = max_no1 + max_no2;

	console.log(`max-1 = ${max_no1}`);
	console.log(`max-2 = ${max_no2}`);
	console.log(`Suma dwóch największych liczb to ${sum}`);
  return sum;
}

// sprawdzenie getSum
// getSum(5,10,15);
// getSum(10,15,5);
// getSum(15,5,10);

// Funkcja isEven

function isEven(number) {
	if (typeof number === "number") {
		if (number % 2 === 0) {
			return true;
		} else return false;
	} else null;
}

// isEven(124);
// isEven(913)
// isEven([]);
// isEven("text");

// Funkcja showInfo

function showInfo(sum, isEven) {
  switch(isEven) {
    case null:
      console.log(`Podany argument ${sum} nie jest liczbą`);
      break;
    case true:
      console.log(`Podany argument ${sum} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${sum} jest nieparzysty`);
      break;
  }
}

let sum2 = getSum(a, b, c);
let even = isEven(sum2);

showInfo(sum2, even);