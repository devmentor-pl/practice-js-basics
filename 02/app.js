/* rozwiązanie z pętlą for */
// const x = Number(prompt("Podaj liczbę!"));
// if (x > 1 && x < 10) {
//     for (let i = 1; i <= 9; i++) {
//         const result = x * i;
//         console.log(x + " " + "X" + " ", i + " " + "=", result);
//     }
// } else {
//     console.error("Podałeś błędne dane");
// }

/* rozwiązanie z pętlą while  */

const a = prompt("Podaj liczbę");
const n = 4;
let j = 1;
const arr = [];
if (a > 1) {
    while (j <= n) {
        j++;
        arr.push(a);
    }
    console.log(arr.join(" * ") + " = " + Math.pow(a, n));
} else {
    console.log("Podałeś błędne dane");
}
