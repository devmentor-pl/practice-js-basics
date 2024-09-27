const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a)
console.log(typeof b)

const resultOfAddition = Number(a) + b;
console.log("Result of addition:", resultOfAddition); // wynik prawidłowy

const resultOfSubtraction = Number(a) - b;
console.log("Result of subtraction:", resultOfSubtraction) // wynik prawidłowy

const resultOfMultiplication = parseFloat(a) * b;
const roundedResultOfMultiplication = resultOfMultiplication.toFixed(2);
console.log("Result of multiplication:", roundedResultOfMultiplication) // wynik prawidłowy

const resultOfDivision = Number(a) / b;
console.log("Result of division:", resultOfDivision) // wynik prawidłowy

const resultOfModulo = Number(a) % b;
console.log("Result of modulo:", resultOfModulo) // wynik prawidłowy

function checkIfBiggerThan20(x) {
  if(x > 20) {
    console.log('The result is greater than the result!');
  } else {
    console.log('The result is not greater than the result.');
  }
}

checkIfBiggerThan20(resultOfAddition) // funkcja działa poprawnie