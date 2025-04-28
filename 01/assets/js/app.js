const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

const numA = parseFloat(a);

const suma = numA + b;
const roznica = numA - b;
const iloczyn = numA * b;
const iloraz = numA / b;
const modulo = numA % b;
const potega = numA ** b;

console.log(suma);
console.log(roznica);

const arr = [suma, roznica, iloczyn, iloraz, modulo, potega];

arr.forEach(function (num) {
  if (num > 20) {
    console.log(num + ' Jest większe od 20');
  } else console.log(num + ' Jest mniejsze lub równe od 20');
});
