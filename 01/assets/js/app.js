const a = '4.2'
const b = 9

console.log(a, b)

console.log(`Zmienna a jest typu: ${typeof a}`)
console.log(`Zmienna b jest typu: ${typeof b}`)

const add = parseFloat(a) + b
const subtraction = a - b
const multiply = a * b
const divide = a / b
const modulo = a % b

console.log(add)
console.log(subtraction)
console.log(multiply)
console.log(divide)
console.log(modulo)

const resultArr = [add, subtraction, multiply, divide, modulo]

resultArr.forEach(function (el) {
	if (el > 20) {
		console.log(`Wynik działania: ${el.toFixed(2)} > 20`)
	} else {
		console.log(`Wynik działania: ${el.toFixed(2)} < 20`)
	}
})
