
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');
const xInt = parseInt(x);

for(let i=1; i<=9; i++) {
    if(x>=1 && x<=9) {
    console.log(i + ' *',parseInt(x) + ' =', i * x);
} else {
    alert('Podana liczba jest spoza przedziału 1-9!');
}}

/* rozwiązanie z pętlą while  */

const a = prompt('Podaj podstawę potęgi');
const b = prompt('Podaj wykładnik potęgi');

if((a >=1 && a<=9) && (b >=1 && b<=9)) {
    console.log(Math.pow(a,b))
}