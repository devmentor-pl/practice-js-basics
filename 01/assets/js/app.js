const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b)

const res1 = a + b;
console.log(parseFloat(a) + b);

const res2 = a - b;
console.log(parseFloat(a) - b);

const res3 = a / b;
console.log(parseFloat(a) / b);

const res4 = a * b;
console.log(parseFloat(a) * b);

if(res1 <20) {
     console.log (res1 + ' = less than 20')
}else {
    console.log (res1 + ' = more than 20')

}
if(res2 <20) {
    console.log (res2 + ' = less than 20')
}else {
   console.log (res2 + ' = more than 20')

}
if(res3 <20) {
    console.log (res3 + ' = less than 20')
}else {
   console.log (res3 + ' = more than 20')

}
if(res4 <20) {
    console.log (res4 + ' = less than 20')
}else {
   console.log (res4 + ' = more than 20')

}