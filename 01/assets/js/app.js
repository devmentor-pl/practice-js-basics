let a = '4.2';
let b = 9;

console.log(a, b);
console.log(`Zmienna a to: ${typeof a}`);
console.log(`Zmienna b to: ${typeof b}`);

const join = a + b; //konkatenacja
console.log(join);
const sum = +a + b;
console.log(`Suma liczb a i b (${sum}) jest ${ sum>20 ? '> 20' : '< 20'}`)
const subs = a - b;
console.log(`Różnica liczb a i b (${subs}) jest ${ subs>20 ? '> 20' : '< 20'}`)
const mult = a * b;
console.log(`Iloczyn liczb a i b (${mult.toFixed(2)}) jest ${ mult>20 ? '> 20' : '< 20'}`)
const division = a / b;
console.log(`Iloraz liczb a i b (${division.toFixed(2)}) jest ${ division>20 ? '> 20' : '< 20'}`)
const modulo = a % b;
console.log(`Modulo liczb a i b (${modulo}) jest ${ modulo>20 ? '> 20' : '< 20'}`)
const incrementA = ++a;
console.log(`Inkrementacja liczby a (${incrementA}) jest ${ incrementA>20 ? '> 20' : '< 20'}`)
const incrementB = ++b;
console.log(`Inkrementacja liczby b (${incrementB}) jest ${ incrementB>20 ? '> 20' : '< 20'}`)
// let postIncrementA = a++;
// console.log(postIncrementA);
// let postIncrementB = b++;
// console.log(postIncrementB);
