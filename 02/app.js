/* rozwiązanie z pętlą for */
const x = Number(prompt("Podaj liczbę!"));
if (x > 1 && x < 10) {
    for (let i = 1; i <= 9; i++) {
        const result = x * i;
        console.log(x + " " + "X" + " ", i + " " + "=", result);
    }
} else {
    console.error("Podałeś błędne dae");
}

/* rozwiązanie z pętlą while  */
//test//
