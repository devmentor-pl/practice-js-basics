const x = Number(prompt('Podaj liczbę!'));

/* rozwiązanie z pętlą for */
if (x <=9) {
    console.log('for');
    for (let i = 1; i <= 9; i++) {
        console.log(`${x} x ${i} =`, x * i);    
    }    
} else {
    alert('Wybrales liczbe wieksza niz 9.');
}


/* rozwiązanie z pętlą while  */
const num1 = Number(prompt('Podaj podstawe potegi!'));
const num2 = Number(prompt('Podaj wykladnik potegi!'));
let i = 0;
console.log('while');
if (x <=9) {
    while (i < num2) {
        i++;
        console.log(`${num1} ** ${i} =`, num1 ** i);
    }
} else {
    alert('Wybrales liczbe wieksza niz 9.');
}

