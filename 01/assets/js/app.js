const a = '4.2';
const b = 9;

console.log(a, b);
console.log('Zmienna a jest typu: '+typeof(a));
console.log('Zmienna b jest typu: '+typeof(b));

const aF = parseFloat(a);
let tempNumber = 0;

console.log(a+' + '+b+' = '+(aF+b));
console.log(a+' - '+b+' = '+(aF-b));
console.log(a+' * '+b+' = '+(aF*b));
console.log(a+' / '+b+' = '+(aF/b));
console.log(a+' % '+b+' = '+(aF%b));
tempNumber = aF;
tempNumber = ++tempNumber;
console.log('++'+a+' = '+tempNumber);
tempNumber = b;
tempNumber = ++tempNumber;
console.log('++'+b+' = '+tempNumber);
tempNumber = aF;
tempNumber = --tempNumber;
console.log('--'+a+' = '+tempNumber);
tempNumber = b;
tempNumber = --tempNumber;
console.log('--'+b+' = '+tempNumber);