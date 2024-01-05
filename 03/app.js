const min = 1
const max = 100

const a = randomNumber(min, max)
const b = randomNumber(min, max)
const c = randomNumber(min, max)

console.log(a, b, c)

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function getSum(num1, num2, num3) {
	let a = parseFloat(num1)
	let b = parseFloat(num2)
	let c = parseFloat(num3)

	const numbersArray = [a, b, c]
	numbersArray.sort((a, b) => {
		return b - a
	})

	const sumOfBiggestNumbers = numbersArray[0] + numbersArray[1]
	console.log(sumOfBiggestNumbers)
	return sumOfBiggestNumbers
}

const sum = getSum(a, b, c)

const isEven = num => {
	if (typeof num === 'number' && num % 2 === 0) {
		return true
	} else if (typeof num === 'number' && num % 2 !== 0) {
		return false
	} else {
		return null
	}
}

const even = isEven(sum)
console.log(even)

function showInfo(y, z) {
	switch (z) {
		case true:
			console.log(`Podany argument ${y} jest parzysty`)
			break
		case false:
			console.log(`Podany argument ${y} jest nieparzysty`)
			break
		default:
			console.log(`Podany argument ${y} nie jest liczbą`)
	}
}
showInfo(sum, even)
