const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof(a), typeof(b));


// Tablice
let tab = []
const wieksze = []
const mniejsze = []

// Operacje
const dodawanie = a + b
const odejmowanie = a - b
const mnozenie = a * b
const dzielenie = a / b
const resztaZDzielenia = a % b

// Dodawanie do tablicy
tab.push(dodawanie, odejmowanie, mnozenie, dzielenie, resztaZDzielenia)

// Funkcja sprawdzajaca
for(let i = 0; i < tab.length; i++) {
    if(tab[i] > 20) {
        console.log(tab[i]);
        wieksze.push(tab[i])
    } else {
        mniejsze.push(tab[i])
    }
}

console.log(wieksze);
console.log(mniejsze);