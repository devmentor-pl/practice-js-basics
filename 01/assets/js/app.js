const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

const res1 = parseFloat(a) + b;
console.log(res1);

const res2 = a * b;
console.log(res2.toFixed(2));

const res3 = a - b;
console.log(res3)

const res4 = a / b;
console.log(res4)

const arr = [res1, res2, res3, res4]

arr.forEach(function (num) {
    if (num > 20) {
        console.log(num + ' jest wieksze od 20')
    } else {
        console.log(num + ' jest mniejsze lub równe');
    }
})

