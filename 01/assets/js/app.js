const a = '4.2';
const b = 9;
const numFloat = parseFloat(a);

console.log(a, b);
console.log('Stała a to: ' + typeof(a));
console.log('Stała b to: ' + typeof(b));

const res1 = numFloat + b;
console.log(res1);

const res2 = numFloat - b;
console.log(res2);

const res3 = numFloat * b;
console.log(res3);

const res4 = numFloat / b;
console.log(res4);

const res5 = numFloat % b;
console.log(res5);

let number;
number = res1; //miejsce do podstawienia sprawdzanej liczby

if(number > 20) {
    console.log('Sprawdzana liczba ' + number + ' jest większa od 20');
} else {
    console.log('Sprawdzana liczba ' + number + ' jest mniejsza od 20');
}
