const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof(a));
console.log(typeof(b));

const numA = parseFloat(a);



const add = numA + b;
console.log(add);

const sub = numA - b;
console.log(sub);

let multi = numA * b;
multi = (Math.round(multi * 100) / 100).toFixed(2)
console.log(multi);

let divide = numA / b;
divide = (Math.round(divide * 100) / 100).toFixed(2)
console.log(divide);

const modulo = numA % b;
console.log(modulo);


const sum = [add, sub, multi, divide, modulo];

for(let i = 0; i < sum.length; i++) {
    if (sum[i] > 20){
        console.log(sum[i] + ' jest większe od 20')
    } else {
        console.log(sum[i] + ' jest mniejsze od 20')
    }
}

