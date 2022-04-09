const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const aInt = parseInt(a)
const res1 = aInt + b;
const res2 = aInt - b;
const res3 = aInt * b;
const res4 = aInt / b;
const res5 = b % 2;
const res6 = a + b;


console.log(
    res1, res2, res3, res4, res5, res6
);

const info1 = res1 > 20 ? true : false;
console.log(info1);

const info2 = res2 > 20 ? true : false;
console.log(info2);

const info3 = res3 > 20 ? true : false;
console.log(info3);

const info4 = res4 > 20 ? true : false;
console.log(info4);

const info5 = res5 > 20 ? true : false;
console.log(info5);

const info6 = res6 > 20 ? true : false;
console.log(info6);