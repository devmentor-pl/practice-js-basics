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

	operationOperand.forEach(el => {
		if (operationType.includes(el)) {
			console.log(`Result: ${operationValue}`);
			if (operationValue >= 20) {
				console.log(`Result of ${el} is greater or equal 20`);
			} else {
				console.log(`Result of ${el} is less than 20`);
			}
		}
	});
};
checkNumber(operations['+'](a, b), operations['+'], operations);



// const checkNumber = (operationValue, operations, xyz) => {
// 	const operand = xyz.toString();
// 	const operationNames = Object.keys(operations).toString();

// 	let sign;

// 	if (operand.includes('+')) {
// 		console.log(operand);
// 	}
// 	console.log(operationNames);

// 	const index = operationNames[1];

// 	// console.log(`Result of ${index} is greater or equal 20`);
// 	// console.log(operationFunc);
// 	// if (operation >= 20) {
// 	// 	console.log(`Result of ${operationName[0]} is greater or equal 20`);
// 	// } else {
// 	// 	console.log(`Result of ${operationName} is less than 20`);
// 	// }
// };
// checkNumber(operations.add(a, b), operations, operations.add);

// if (checkNumber(operation) < 20) {
// 	console.log(`Result of ${operationName} is greater or equal 20`);
// } else {
// 	console.log(`Result of ${operationName} is less than 20`);
// }
