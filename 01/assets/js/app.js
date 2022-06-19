const a = "4.2";
const b = 9;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulo = a % b;
let exponent = a ** b;
// console.log(addition, subtraction, multiplication, division, modulo, exponent);
console.log("addition: " + addition);
console.log("subtraction: " + subtraction);
console.log("multiplication: " + multiplication);
console.log("division: " + division);
console.log("modulo: " + modulo);
console.log("exponent: " + exponent);
const sumArr = [addition, subtraction, multiplication, , division, modulo, exponent];
const moreThenTwenty = sumArr.map(Number).filter(function (e) {
	return e > 20;
});
const lessThenTwenty = sumArr.map(Number).filter(function (e) {
	return e < 20;
});

console.log("More then 20: " + moreThenTwenty);
console.log("Less then 20: " + lessThenTwenty);
