const a = '4.2';
const b = 9;

console.log(a, b);

console.log('typ stałej "a" to ' + typeof a + ', typ stałej "b" to '+ typeof b);

console.log(a + b, a -b, a*b, a/b);

// const add = parseFloat(a) + b;

const add = Number(a) + b;
console.log(add);

const sub = Number(a) - b;
console.log(sub);

const multi = Number(a) * b;
console.log(multi);
console.log(multi.toFixed(2));

const divide = Number(a) / b;
console.log(divide);
console.log(divide.toFixed(2));


const array = [add, sub, multi, divide];

array.forEach(function(num) {
    if(num > 20) {
        console.log(num + ' jest większe niż 20');
    } else {
        console.log(num + ' jest mniejsze niż 20');
    }
})
