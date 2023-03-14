type CalcOperation = (a: number, b: number) => number;

interface Operations {
	'+': (a: number, b: number) => number;
	'-': (a: number, b: number) => number;
	'*': (a: number, b: number) => number;
	'**': (a: number, b: number) => number;
	'/': (a: number, b: number) => number;
	'%': (a: number, b: number) => number;
}
let a = parseInt('4.2');
let b = 9;

// console.log(a, b);
// console.log(typeof a, typeof b);

const addition = (a: number, b: number): number => {
	return a + b;
};
const subtraction = (a: number, b: number): number => {
	return a - b;
};
const multiplication = (a: number, b: number): number => {
	return a * b;
};
const exponentiation = (a: number, b: number): number => {
	return a ** b;
};
const division = (a: number, b: number): number => {
	return a / b;
};
const modulus = (a: number, b: number): number => {
	return a % b;
};

const operations: Operations = {
	'+': addition,
	'-': subtraction,
	'*': multiplication,
	'**': exponentiation,
	'/': division,
	'%': modulus,
};

//
const checkNumber = (operationValue: number, operation: CalcOperation, operations: Operations) => {
	const operationType = operation.toString();
	const operationOperand = Object.keys(operations);

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
