const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

// Wyrażenie funkcyjne sprawdzające parzystość
const isEven = function(sum) {
    if (typeof sum !== 'number' || Number.isNaN(sum)) return null
        if (sum % 2 === 0) return true
        else return false
}
// Wywołanie funkcji
const sum = getSum(a,b,c)
const even = isEven(sum)
showInfo(sum,even)

// Funkcja sumująca dwie największe z trzech liczb
function getSum(a,b,c) {
    a = parseInt(a)
    b = parseInt(b)
    c = parseInt(c)
    if (a >= b) {
        if (b >= c) return a + b
        else return a + c
    } 
    else {
        if (a >= c) return b + a
        else return b + c
    }       
}
// Funkcja wypisująca informację o wyniku
function showInfo(sum, even) {
    switch (even) {
        case null: console.log(`Podany argument ${sum} nie jest liczbą`)
        break
        case true: console.log(`Podany argument ${sum} jest parzysty`)
        break
        case false: console.log(`Podany argument ${sum} jest nieparzysty`)
        break
    }
}
// Funkcja losująca liczbę z podanego zakresu
function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}