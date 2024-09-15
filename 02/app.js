
/* rozwiązanie z pętlą for */
const x = prompt("Podaj liczbe!");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (x <= 10) {
    for (const number of numbers) {
        let result = x * number
        console.log(`${x} * ${number} = ${result}`);
    }
} else {
    alert("Twoja liczba musi mieścić sie w przedziale 1 - 9")
}


// /* rozwiązanie z pętlą while  */

let a = Number(prompt("podaj liczbę (a) - podstawe"));
let n = Number(prompt("podaj liczbę (b) - wykładnik"));
let result = a ** n;

if (a === Number && b === Number) {
    while (!isNaN(a) && !isNaN(n) && n > 0) {
        console.log(`${Array(n).fill(a).join(` * `)} = ${result}`)
        break;
    };
}else{
    alert("Prosze podaj liczby nie litery!")
}

