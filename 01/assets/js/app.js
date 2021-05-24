const a = '4.2';
const b = 9;

console.log(`a to typ ${typeof a}`);
console.log(`b to typ ${typeof b}`);
const newA = parseFloat(a);

const sum = newA + b;
console.log(`Suma ${sum} ${sum >=20 ? `> 20` : `< 20`}`);
const diff = newA - b;
console.log(`Różnica ${diff} ${diff >=20 ? `> 20` : `< 20`}`);
const multi = newA * b;
console.log(`Iloczyn ${multi.toFixed(2)} ${multi.toFixed(2) >=20 ? `> 20` : `< 20`}`);
const div = newA / b;
console.log(`Iloraz ${div.toFixed(2)} ${div.toFixed(2) >=20 ? `> 20` : `< 20`}`);