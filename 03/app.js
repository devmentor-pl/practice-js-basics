const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    let sum = parseInt(a);
    sum += parseInt(b);
    sum += parseInt(c);
    return sum;}

    /*1. Funkcja o nazwie `getSum`:
    - przyjmuje 3 parametry. Ich wartość w ciele funkcji ma zostać przekonwertowana na liczby całkowite,
    - z podanych 3 liczb wybierane są 2 największe,
    - wartości tych 2 liczb są sumowane, a wynik jest zwracany przez funkcję.



*/

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}