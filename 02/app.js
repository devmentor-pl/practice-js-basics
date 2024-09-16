
const x = prompt('Podaj liczbę: ');
const xint = parseInt(x);

/* rozwiązanie z pętlą for */

for(let i = 1; i <= 10; i++) {
    console.log(`${i} * ${x} = ${x * i}`);
}


/* rozwiązanie z pętlą while  */
let i = 1;
while(i <= 10) {
    console.log(`${i} * ${x} = ${x * i}`);
    i++;
}