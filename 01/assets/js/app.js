const a = +'4.2';
const b = 9;

console.log(typeof a);
console.log(typeof b);

const result = a + b;
const result1 = a - b;
const result2 = a * b;
const result3 = a / b;
const result4 = a ** b;

const scoreboard = [result, result1, result2, result3, result4];

for (const element of scoreboard) {
    if (element > 20) {
        console.log(`${element} jest wiekszy niz 20`);
    } else {
        console.log(`${element} nie jest większy niż 20`)
    }
};