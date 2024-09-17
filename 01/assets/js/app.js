const a = '4.2';
const b = 20;

console.log(a, b);

console.log('a: ' + typeof a);
console.log('b: ' + typeof b);

const aFloat = parseFloat(a);

const sum = aFloat + b;
console.log(`Suma liczb a=${a}, b=${b} jest ${sum >=20 ? `większa od 20` : `mniejsza od 20`} i wynosi ${sum}.`);

const diff = aFloat - b;
console.log(`Róznica liczb a=${a}, b=${b} jest ${diff >=20 ? `większa od 20` : `mniejsza od 20`} i wynosi ${diff}.`);

const product = aFloat * b;
console.log(`Iloczyn liczb a=${a}, b=${b} jest ${product >=20 ? `większy od 20` : `mniejszy od 20`} i wynosi ${product.toFixed(2)}.`);

const quotient = aFloat / b;
console.log(`Iloraz liczb a=${a}, b=${b} jest ${quotient >=20 ? `większy od 20` : `mniejszy od 20`} i wynosi ${quotient.toFixed(2)}.`);

const modulo = aFloat % b;
console.log(`Reszta z dzielenia liczby a=${a} przez b=${b} jest ${modulo >=20 ? `większa od 20` : `mniejsza od 20`} i wynosi ${modulo.toFixed(2)}.`);