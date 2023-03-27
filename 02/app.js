/* rozwiązanie z pętlą for */

// let x;

// do {
//     x = parseInt(prompt('Podaj liczbę z przedziału 1 - 9!'));
//   } while (x < 1 || x > 9);

// for (let i = 1; i < 10; i++) {
//     console.log(`${x} x ${i} = ${x * i}`);
// }

/* rozwiązanie z pętlą while  */

let base = parseInt(prompt("Podaj podstawę:"));
let exponent = parseInt(prompt("Podaj wykładnik:"));
let result = 1;
let i = 0;
let string ='';
while (i < exponent) {
    string += `${base} * `;
    i++;
}
string.slice(0, string.length-1);
console.log(`${string} = ${Math.pow(base,exponent)}`)