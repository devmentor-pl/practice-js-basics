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
	const x = parseInt(num1)
	const y = parseInt(num2)
	const z = parseInt(num3)

	const numbers = [x, y, z]

	numbers.sort((a, b) => {
		return b - a
	})

	return numbers[0] + numbers[1]
}
const sum = getSum(a, b, c)
console.log(`${sum} - to suma 2 największych liczb`)

const isEven = function (num) {
	if (typeof num === 'number') {
		if (num % 2 === 0) {
			return true
		} else {
			return false
		}
	} else {
		return null
	}
}
const even = isEven(sum)
console.log(`${even}  - sprawdzam czy liczba jest parzysta`)

function showInfo(num, value) {
	switch (value) {
		case null:
			console.log(`Podany argument ${num} nie jest liczbą`)
			break

		case true:
			console.log(`Podany argument ${num} jest parzysty`)
			break

		case false:
			console.log(`Podany argument ${num} jest nieparzysty`)
			break
	}
}
showInfo(sum, even)
