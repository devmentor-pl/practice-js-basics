let a = parseInt('4.2');
let b = 9;

// console.log(a, b);
// console.log(typeof a, typeof b);

const addition = (a, b) => {
	return a + b;
};
const subtraction = (a, b) => {
	return a - b;
};
const multiplication = (a, b) => {
	return a * b;
};
const exponentiation = (a, b) => {
	return a ** b;
};
const division = (a, b) => {
	return a / b;
};
const modulus = (a, b) => {
	return a % b;
};

const operations = {
	'+': addition,
	'-': subtraction,
	'*': multiplication,
	'**': exponentiation,
	'/': division,
	'%': modulus,
};
const checkNumber = (operationValue, operation, index) => {
	const operationType = operation.toString();
	const operationOperand = Object.keys(index);

	operationOperand.forEach(operand => {
		if (operationType.includes(operand)) {
			console.log(`Result: ${operationValue}`);
			if (operationValue >= 20) {
				console.log(`Result of ${operand} is greater or equal 20`);
			} else {
				console.log(`Result of ${operand} is less than 20`);
			}
		}
	});
};
checkNumber(operations['+'](a, b), operations['+'], operations);