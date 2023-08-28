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

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}
