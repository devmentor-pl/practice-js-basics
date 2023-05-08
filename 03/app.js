const min = 1
const max = 100

const a = randomNumber(min, max)
const b = randomNumber(min, max)
const c = randomNumber(min, max)

console.log(a, b, c)

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function getSum(a, b, c) {
	if (a > b && c > b) {
		return a + c
	}
	if (b > a && c > a) {
		return b + c
	}
	if (a > c && b > c) {
		return a + b
	}
	if (a === b && a === c && b === c) {
		console.log(`wygenerowane liczby są takie same pierwsza=${a},druga=${b},trzecia=${c}`)
	}
}

const isEven = num => {
	if (typeof num !== 'number') {
		return null
	}
	if (typeof num === 'number') {
		if (num % 2 === 0) {
			return true
		} else {
			return false
		}
	}
}

const showInfo = function (num, s) {
	switch (s) {
	  case null:
		console.log(`Podany argument ${num} nie jest liczba`);
		break;
	  case true:
		console.log(`Podany argument ${num} jest parzysty`);
		break;
	  case false:
		console.log(`Podany argument ${num} jest nieparzysty`);
		break;
	}
  };
  
  const sum = getSum(a, b, c);
  console.log(sum);
  const even = isEven(sum);
  console.log(even);
  showInfo(sum, even);