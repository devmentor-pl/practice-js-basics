
/* rozwiązanie z pętlą for */
const x = 4;

for (let i = 1; i <= 9; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
}


/*rozwiązanie z prompt*/
const t = prompt('Podaj liczbę!');

if ( t >= 9){
console.log("liczba jest za duża")
}

else {
    for (let i = 1; i <= 9; i++) {
        console.log(`${t} x ${i} = ${t * i}`);
    }
}

/* rozwiązanie z pętlą while  */

