const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const add = parseFloat(a)+ b;
console.log(add);
const sub = a - b;
console.log(sub);
const multi = parseFloat(a) * b;
console.log(multi);
const div = a / b;
console.log(div);
const modulo = a % b;
console.log(modulo);

if(a>b){
    console.log(a);
}else{
    console.log(b);
}