const a = '4.2';
const b = 9;

let newA = parseFloat(a);
console.log(a, b);

let sum = newA + b;
console.log(`Suma ${sum} ${sum >=20 ? `> 20` : `< 20`}`);
let diff = newA - b;
console.log(`Różnica ${diff} ${diff >=20 ? `> 20` : `< 20`}`);
let multi = newA * b;
console.log(`Iloczyn ${multi.toFixed(2)} ${multi.toFixed(2) >=20 ? `> 20` : `< 20`}`);
let div = newA / b;
console.log(`Iloraz ${div.toFixed(2)} ${div.toFixed(2) >=20 ? `> 20` : `< 20`}`);