const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const c = parseInt(a);

const res1 = c + b;
const res2 = c - b;
const res3 = c * b;
const res4 = c / b;
const res5 = c % b;

console.log(res1, res2, res3, res4, res5);

function compareTo20(param) {
if(param > 20) {
    console.log(param + ' is bigger than 20');
}else{
    console.log(param + ' is smaller than 20' );
}
}

compareTo20(res1);
compareTo20(res2);
compareTo20(res3);
compareTo20(res4);
compareTo20(res5);