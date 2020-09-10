const a = 1;
const b = 3;
let total = difference = product = quotient = modulo = 0;

console.log(typeof a, typeof b, typeof total, typeof difference, typeof product, typeof quotient, typeof modulo);
console.log(a, b, total, difference, product, quotient, modulo);

total = a + b;
console.log(a, '+', b, '=', total);
console.log(typeof a, '+',typeof b, '=', typeof total);

difference = a - b;
console.log(a, '-', b, '=', difference);
console.log(typeof a, '-', typeof b, '=', typeof difference);

quotient = a / b;
console.log(a, '/', b, '=', quotient);
console.log(typeof a, '/', typeof b, '=', typeof quotient);

product = a * b;
console.log(a, '*', b, '=', product);
console.log(typeof a, '*', typeof b, '=', typeof product);

modulo = a % b;
console.log(a, 'modulo', b, '=', modulo);
console.log(typeof a, 'modulo', typeof b, '=', typeof modulo);

if(total > 20) {
    console.log('total is greater than 20');
} else {
    console.log('total is less than 20'); 
}

if(difference > 20) {
    console.log('difference is greater than 20');
} else {
    console.log('difference is less than 20'); 
}

if(quotient > 20) {
    console.log('quotient is greater than 20');
} else {
    console.log('quotient is less than 20'); 
}

if(product > 20) {
    console.log('product is greater than 20');
} else {
    console.log('product is less than 20'); 
}

if(modulo > 20) {
    console.log('modulo is greater than 20');
} else {
    console.log('modulo is less than 20'); 
}