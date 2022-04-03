const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const result1 = parseFloat(a) + b;
console.log(result1);

const result2 = parseFloat(a) - b;
console.log(result2);

const result3 = parseFloat(a) * b;
console.log(result3);

const result4 = parseFloat(a) / b;
console.log(result4);

const results = [result1, result2, result3, result4]

results.forEach(function(x) {
    if(x > 20) {
        console.log(x + ' jest większy od 20.')
    } else {
        console.log(x + ' jest równe lub mniejsze od 20.')
    }
})