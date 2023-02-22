const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

const suma = parseInt(a) + b;
const subtr = parseInt(a) - b;
const multipl = parseInt(a) * b;
const division = parseInt(a) / b;


console.log(
    suma, subtr, multipl, division
);

if (suma > 20) {
    console.log( `${suma} jest większa od 20 `)
} else if (subtr > 20) {
    console.log(` ${subtr} jest większa od 20 `)
} else if (multipl > 20) {
    console.log(` ${multipl} jest większa od 20 `)
} else if (division > 20) {
    console.log( ` ${division} ta liczba jest większa od 20 `)
} else{
    console.log('żadna z liczb nie jest wieksza od 20 ')
}




