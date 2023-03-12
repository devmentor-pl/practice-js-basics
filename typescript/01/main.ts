type OperationsNames = 'addition' | 'subtraction' | 'multiplication' | 'exponentiation' | 'division' | 'modulus';

const a = parseInt('4.2');
const b = 9;

const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const exponentiation = a ** b;
const division = a / b;
const modulus = a % b;

const checkNumber = (operation: number, operationName: OperationsNames): void => {
	console.log(`Result: ${operation}`);
	if (operation >= 20) {
		console.log(`Result of ${operationName} is greater or equal 20`);
	} else {
		console.log(`Result of ${operationName} is less than 20`);
	}
};
checkNumber(addition, 'addition');
