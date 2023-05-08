const a = '4.2'
const b = 9

console.log(a, b)
console.log(typeof a)
console.log(typeof b)

const sum = parseFloat(a) + b
const subtraction = parseFloat(a) - b
const multiply = parseFloat(a) * b
const divide = parseFloat(a) / b
const modulo = parseFloat(a) % b

console.log(sum)
console.log(subtraction)
console.log(multiply)
console.log(divide)
console.log(modulo)

if (sum > 20) {
	console.log('jest większy niż 20')
} else {
	console.log('nie jest większy')
}
if (subtraction > 20) {
	console.log('jest większy niż 20')
} else {
	console.log('nie jest większy')
}
if (multiply > 20) {
	console.log('jest większy niż 20')
} else {
	console.log('nie jest większy')
}
if (divide > 20) {
	console.log('jest większy niż 20')
} else {
	console.log('nie jest większy')
}
if (modulo > 20) {
	console.log('jest większy niż 20')
} else {
	console.log('nie jest większy')
}
