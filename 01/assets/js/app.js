const a = '4.2';
const b = 9;

console.log(a, b);
console.log('a is a ' + typeof(a), 'b is a ' + typeof(b));

const sum = Number(a) + b;
const sub = a - b;
const div = a / b;
const mul = a * b;
const rem = b % a;
console.log(sum, sub, mul, div, rem);

const checkSum = sum > 20 ? sum +' is greater than 20' : sum + ' is less than 20'; 
const checkSub = sub > 20 ? sub +' is greater than 20' : sub + ' is less than 20'; 
const checkDiv = div > 20 ? div +' is greater than 20' : div + ' is less than 20'; 
const checkMul = mul > 20 ? mul +' is greater than 20' : mul + ' is less than 20'; 
const checkRem = rem > 20 ? rem +' is greater than 20' : rem + ' is less than 20'; 

console.log(checkSum, checkSub, checkDiv, checkMul, checkRem);
