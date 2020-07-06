/* rozwiązanie z pętlą for */
const x = parseInt(prompt('Podaj liczbę'));
if (x => 1 && x <= 9) {
    for (let i = 1; i <= 9; i++) {
        const result = i * x;
        console.log(result)
    }
} else {
    alert('Liczba musi być w przedziale od 1 do 9');
}



/* rozwiązanie z pętlą while  */

const a = 3;
const n = prompt('Podaj wykładnik');

const power = Math.pow(x, n);
console.log(power);