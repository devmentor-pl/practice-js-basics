/* rozwiązanie z pętlą for */

let x;

do {
    x = parseInt(prompt('Podaj liczbę z przedziału 1 - 9!'));
  } while (x < 1 || x > 9);

for (let i = 1; i < 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
}

/* rozwiązanie z pętlą while  */

