const a = '4.2';
const b = 9;
const aNumber = Number(a);

console.log(a, b);
console.log(typeof a, typeof b);
console.log(aNumber, typeof aNumber);

const res1 = aNumber + b;
const res2 = a - b;
const res3 = a * b;
const res4 = a / b;
const res5 = b % a;
let res6 = Number(a);
res6++;
let res7 = Number(a);
res7--;

console.log(res1, res2, res3, res4, res5, res6, res7);

const mathOperators = [res1, res2, res3, res4, res5, res6, res7];

mathOperators.forEach(function(element) {
    if (element > 20) {
        console.log('Wynik większy od 20 =', element);
    }
});