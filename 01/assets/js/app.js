const a = '4.2';
const b = 9;

console.log(a, b);

console.log(`Zmienna \'a\' jest typu ${typeof a}, a zmienna \'b\' typu ${typeof b}`);

console.log(`${a} + ${b} = ${+a + b}`);
console.log(`${a} - ${b} = ${+a - b}`);
console.log(`${a} : ${b} = ${+a / b}`);
console.log(`${a} * ${b} = ${+a * b}`);
console.log(`${b} ^ ${a} = ${b ** +a}`);
console.log(`${b} pierwiastek z ${a} = ${b ** ((+a)**(-1))}`);
console.log(`${a} % ${b} = ${+a % b}`);