let a = 4.2;
let b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

// const addition = (a, b) => {
// 	return a + b;
// };
// const subtraction = (a, b) => {
// 	return a - b;
// };
// const multiplication = (a, b) => {
// 	return a * b;
// };
// const exponentiation = (a, b) => {
// 	return a ** b;
// };
// const division = (a, b) => {
// 	return a / b;
// };
// const modulus = (a, b) => {
// 	return a % b;
// };

const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const exponentiation = a ** b;
const division = a / b;
const modulus = a % b;

const checkNumber = (operation, operationName = 'operation') => {
	console.log(`Result: ${operation}`);
	if (operation >= 20) {
		console.log(`Result of ${operationName} is greater or equal 20`);
	} else {
		console.log(`Result of ${operationName} is less than 20`);
	}
};
checkNumber(subtraction, 'addition');
