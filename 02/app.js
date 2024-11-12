const x = prompt('Podaj liczbę');

if (x >= 1 && x <= 9) {
    
    for (let i = 1; i <= 9; i++) {
        console.log(x + " x " + i + " = " + (x * i));
    }
} else {
    console.log('Podana liczba jest poza zakresem! Proszę podać liczbę od 1 do 9.');
}

/* rozwiązanie z pętlą while  */

let a = prompt("Podaj podstawę");
let n = prompt("Podaj wykładnik");

let result = 1;

let i = 0;

while (i < n) {
    result = result * a;
}

console.log(a + " do potęgi " + n + " to " + result);