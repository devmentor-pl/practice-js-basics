
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

    for(let i=1; i<10; i++) {
    const result = i + " x " + x + " = " + i * x;
    console.log(result);
} 



/* rozwiązanie z pętlą while  */
let j = 0;
while(j < 9) {
    j++;
    const resultWhile = j + ' x ' + x + ' = ' + j * x;
    console.log(resultWhile);
};
