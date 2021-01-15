// Dodaj do pliku HTML plik `app.js` i sprawdź w konsoli (Chrome -> F12) czy widzisz zawartość zmiennych.

const a = '4.2';
const b = 9;

console.log(a, b);


// Dodaj do pliku HTML plik `app.js` i sprawdź w konsoli (Chrome -> F12) czy widzisz zawartość zmiennych.
console.log(typeof a);
console.log(typeof b);

const score = []

const z = parseInt(a);
const rest2 = z + b;
score.push(rest2);
const rest3 = z - b;
score.push(rest3);
const rest4 = z * b;
score.push(rest4);
const rest5 = z / b;
score.push(rest5);
const rest6 = z % b;
score.push(rest6);





console.log(score);
const aboveOrBelow20 = score.map(function (score) {
    if (score > 20) {
        return 'Większa od 20'
    } else return 'Mniejsza od 20';
})

console.log(aboveOrBelow20);