
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę');

if (x < 10 && x > 0) {
    for (let i=1; i < 10; i++) {
        console.log(`${x} x ${i} = ${x*i}`)
    }
} else {
    console.log('Podana liczba nie jest z przedziału 1 - 9 !');
}


/* rozwiązanie z pętlą while  */

const a = parseInt(prompt('Podaj podstawę potęgi')); 
const n = parseInt(prompt('Podaj wykładnik potęgi'));
let j = 1;
let exponentSequence = a;

//zakladamy podstawę i wykładnik jako liczby naturalne  >= 1 
if(1 <= a && 1 <= n) {
    while (j < n) {
        exponentSequence+=` *${a}`
        j++;
    } 
    console.log(`${exponentSequence} = ${Math.pow(a,n)}`);
} else {
    console.log("Podstawa lub wykładnik mniejsze od 1!")
}



