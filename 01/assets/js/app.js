const a = '4.2';
const b = 9;
console.log(a, b);
console.log(typeof a, typeof b);

const aNumber = Number(a);
console.log(typeof aNumber, typeof b);

const suma = aNumber + b;
const roznica = aNumber - b;
const iloczyn = aNumber * b;
const iloraz = aNumber / b;
const modulo = aNumber % b;

console.log(suma, roznica, iloczyn, iloraz, modulo);

if(suma > 20) {
    console.log(suma);
} else if (roznica > 20) {
    console.log(roznica + ' jest wieksze niz 20');
} else if (iloczyn > 20) {
    console.log(iloczyn + ' jest wieksze niz 20');
} else if (iloraz > 20) {
    console.log(iloraz + ' jest wieksze niz 20');
} else if (modulo > 20) {
    console.log(modulo + ' jest wieksze niz 20');
}