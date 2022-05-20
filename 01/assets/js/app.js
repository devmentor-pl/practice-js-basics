const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b)


const res1 = Number(a) + b
console.log(res1)

const res2 = a - b
console.log(res2)

const res3 = a * b
console.log(res3.toFixed(1))

const res4 = a / b
console.log(res4)


const arr = [res1, res2, res3, res4]
arr.forEach(function (res) {
    if (res > 20) {
        console.log(res + ' jest większe od 20')
    } else {
        console.log(res + ' jest mniejsze/równe 20')
    }
})