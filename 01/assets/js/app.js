const a = '4.2';
const b = 9;

console.log(a, b);
console.log('Zmienna a jest typu: '+typeof(a));
console.log('Zmienna b jest typu: '+typeof(b));

const checkValue = 20;
const aF = parseFloat(a);
let tempNumber = 0;

const sum = aF + b;
console.log(a+' + '+b+' = '+sum);
checkIfBiggerThan(sum);
const diff = aF - b;
console.log(a+' - '+b+' = '+diff);
checkIfBiggerThan(diff);
const multiply = (aF * b).toFixed(1);
console.log(a+' * '+b+' = '+multiply);
checkIfBiggerThan(multiply);
const divide = (aF / b).toFixed(3);
console.log(a+' / '+b+' = '+divide);
checkIfBiggerThan(divide);
const modulo = (b % aF).toFixed(1);
console.log(b+' % '+a+' = '+modulo);
checkIfBiggerThan(modulo);
tempNumber = aF;
const incrementA = ++tempNumber;
console.log('++'+a+' = '+incrementA);
checkIfBiggerThan(incrementA);
tempNumber = b;
const incrementB = ++tempNumber;
console.log('++'+b+' = '+incrementB);
checkIfBiggerThan(incrementB);
tempNumber = aF;
const decrementA = --tempNumber;
console.log('--'+a+' = '+incrementA);
checkIfBiggerThan(decrementA);
tempNumber = b;
const decrementB = --tempNumber;
console.log('--'+b+' = '+decrementB);
checkIfBiggerThan(decrementB);

function checkIfBiggerThan(number) {
    if(number > checkValue){
        console.log('Wynik działania jest większy niż '+checkValue);
    }
    else {
        console.log('Wynik działania nie jest większy niż '+checkValue);
    }
}