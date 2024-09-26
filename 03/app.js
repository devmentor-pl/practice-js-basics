const min = 1
const max = 100

const a = randomNumber(min, max)
const b = randomNumber(min, max)
const c = randomNumber(min, max)

console.log(a, b, c)

function getSum() {
	const num1 = parseInt(a)
	const num2 = parseInt(b)
	const num3 = parseInt(c)

	// wybór 2 największych  liczb
	const max1 = Math.max(num1, num2, num3)
	let max2

	if (num1 === max1) {
		max2 = Math.max(num2, num3)
	} else if (num2 === max1) {
		max2 = Math.max(num1, num3)
	} else {
		max2 = Math.max(num1, num2)
	}
	const sum = max1 + max2
	return sum
}
const result = getSum(a, b, c)
console.log('Suma dwóch największych liczb: ' + result)

const isEven = function (numRandom) {
	if (typeof numRandom !== 'number') {
		return null
	}
	if (numRandom % 2 === 0) {
		return true
	}
	return false
}
console.log(isEven('test'), isEven(1), isEven(2))

function showInfo(value, isEven) {
	switch (isEven) {
		case null:
			console.log(`Podany argument ${value} nie jest liczba`)
			break
		case true:
			console.log(`Podany argument ${value} jest parzysty`)
			break
		case false:
			console.log(`Podany argument ${value} jest nieparzysty`)
	}
}
const sum = getSum(a, b, c)
const even = isEven(sum)
showInfo(sum, even)

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}
