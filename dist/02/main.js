"use strict";
const x = 4 || Number(prompt(`Podaj liczbę!`));
/* rozwiązanie z pętlą for */
for (let i = 1; i < 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
}
/* rozwiązanie z pętlą while  */
const exponentiate = (a, b) => {
    while (a <= b || a >= b) {
        let sum = a ** b;
        console.log(`${a} * `.repeat(b - 1) + a + ` = ${sum}`);
        break;
    }
};
exponentiate(3, 1);
