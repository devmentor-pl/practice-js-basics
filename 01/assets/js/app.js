const a = parseFloat('21.47');
const b = -12;
const smallerThan20 = [];
const biggerThan20 = [];

console.log(a, b);

console.log(typeof a, typeof b);

const add = a + b;
const substr = a - b;
const mult = a * b;
const div = a / b;
const mod = a % b;


console.log("a+b=", add, (add>20)?"wnik powyzej 20" : "wynik rowny/ponizej 20");
console.log("a-b=", substr, (substr>20)?"wnik powyzej 20" : "wynik rowny/ponizej 20");
console.log("a*b=", mult, (mult>20)?"wnik powyzej 20" : "wynik rowny/ponizej 20");
console.log("a/b=", div, (div>20)?"wnik powyzej 20" : "wynik rowny/ponizej 20");
console.log("a%b=", mod, (mod>20)?"wnik powyzej 20" : "wynik rowny/ponizej 20");

