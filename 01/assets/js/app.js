const a = '4.2';
const b = 9;
let numberA = parseFloat(a);



console.log(a, b);

console.log(typeof a, typeof b);

let addedText = b + a;
let added = b + numberA;
let subtracted = b - numberA;
let divided = b / numberA;
let multiplied = b * numberA;
let restOf = b % numberA;



console.log(addedText, added, subtracted, divided, multiplied, restOf);

let Tablica = [addedText, added, subtracted, divided, multiplied, restOf];

for (let i = 0; i < Tablica.length; i++) {
    if (parseFloat(Tablica[i]) > 20) {
        console.log(Tablica[i], "Wiekszy od 20");
    }
    else if (parseFloat(Tablica[i]) < 20) {
        console.log(Tablica[i], "Mniejszy od 20");
    }
}




