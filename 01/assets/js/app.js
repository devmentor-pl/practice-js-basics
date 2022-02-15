const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

let x = parseInt(a);
console.log(typeof x);

const sum = x + b;
const sub = b - x;
const mult = x * b;
const divi = b / x;
const rest = divi % 2;
const incr = x++;
const decr = x--;
const conc = b + a;

console.log(sum, sub, mult, divi, rest, incr, decr, conc);

const arr = [sum, sub, mult, divi, rest, incr, decr, conc];
console.log(arr);

arr.forEach(number => {
    if (number > 20) {
        console.log('Liczba ' + number + ' jest większa od 20');
    } else {
        console.log('Liczba ' + number + ' jest mniejsza od 20');
    }
});

