
/* rozwiązanie z pętlą for */
const x = parseInt(prompt("Podaj liczbę!"));
let result = 0;

if(x > 0 && x <= 9) {
   for(let i = 1; i <= 9; i++) {
    result = i * x;
    console.log(i + " * " + x + " = " + result);
    } 
} else {alert("Podana liczba nie mieści się w przedziale 1-9")}

/* rozwiązanie z pętlą while  */

const a = parseInt(prompt("Podaj podstawę!"));
const n = parseInt(prompt("Podaj wykładnik!"));
let j = 1;
let exponentiation = ""

if(a > 0 && a <= 9 && n > 0 && n <= 9) {
    while (j <= n) {
        exponentiation += a;
        if(j < n) {
            exponentiation += " * "
        }
        j++;
    }
    console.log(exponentiation + " = " + Math.pow(a, n))
} else {
    {alert("Podana liczba nie mieści się w przedziale 1-9")}
}