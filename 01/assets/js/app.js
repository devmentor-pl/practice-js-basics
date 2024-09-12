const a = Number("4.2");
const b = 9;

console.log(typeof a, typeof b);

const sum = a + b;

console.log(sum);

const multiplication = a * b;

console.log(multiplication);

const subtraction = a - b;
console.log(subtraction);

const division = a / b;
console.log(division);

const arr = [sum, multiplication, subtraction, division];

arr.forEach(function (num) {
    if (num > 20) {
        console.log(num + " jest większe od 20");
    } else {
        console.log(num + " jest mniejsze od 20");
    }
});
