const a = '4.2';
const b = 9;
const aNum = Number(a);

console.log(a, b);
console.log(typeof a, typeof b);

const add = aNum + b;
const sub = aNum - b;
const mply = aNum * b;
const divide = aNum / b;
const exp = aNum ** b;
console.log(add, sub, mply.toFixed(2), divide.toFixed(2), exp.toFixed(2));

const arr = [add, sub, mply, divide, exp];

arr.forEach((item) => {
	if (item > 20) {
		console.log(`${item} jest > 20`);
	} else {
		console.log(`${item} jest <=20`);
	}
});
