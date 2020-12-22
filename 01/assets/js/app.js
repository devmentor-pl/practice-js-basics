const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const case1 = 2 * 3;
const case2 = 10 / 7;
const case3 = 20 % 7;
const case4 = 2 + 958;
let case5 = 10; case5--;
const case6 = 2 + '5';
const case7 = 100 - 54;
const case8 = NaN / 2;


console.log(case1, case2, case3, case4, case5, case6, case7, case8);

//dotyczy case6
const9 = 2;
const10 = '5';
const11 = parseInt(const10);
const resultCase6 = const9 + const11;

console.log(resultCase6);

const aa = parseInt(a);
const c = 20; 
if (aa > b && aa > c) {
    console.log('a jest największy'); 
} else if (b > c) {
    console.log('b jest największy'); 
} else {
    console.log('c jest największy');
}
