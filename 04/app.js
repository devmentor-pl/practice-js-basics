
const arrayTwentyNumbers = [];
const min = 10;
const max = 200;

// (1)
// Napisz funkcję, która utworzy tablicę z 20 elementami i ją zwróci. 
// Funkcja ta ma przyjmować dwa parametry tj. liczbę minimalną oraz maksymalną jaka może zostać wylosowana. 
// W ciele tej funkcji wykorzystaj pętle `for` oraz obiekt `Math`

function createArrayTwentyNumbers(min, max) {
    for (let i = 0; i < 20; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        arrayTwentyNumbers.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return arrayTwentyNumbers;
}

console.log(createArrayTwentyNumbers(min, max))

// (2)
// Kolejna funkcja ma przyjmować przez argument tablicę i sortować ją od wartości największej do najmniejszej. 
// Następnie ma zwrócić tablicę zawierającą tylko 10 największych liczb. 
// W ciele funkcji możesz użyć metod `.sort()` oraz `.slice()` 

let tenLargerst = [];

function getTenLargerst(array) {
    function compare(a, b) {
        return a - b;
    }
    array.sort(compare);
    console.log(array)
    array = array.slice(9, 19);
    console.log(array)
    tenLargerst = array;
    return tenLargerst;
}

console.log(getTenLargerst(arrayTwentyNumbers))

// (3)
// Ostatnia funkcja ma obliczać [średnią arytmetyczną] 
// z liczb przechowyanych w przekazanej przez parametr tablicy 
// - możesz do tego wykorzystać `.forEach()` lub `.reduce()`

let averageTenLargerst = 0;

function getAverageTenLargerst(array) {
    function sumNumbers(a, b) {
        return a + b;
    }
    averageTenLargerst = array.reduce(sumNumbers) / 10;
    return averageTenLargerst;
}

console.log(getAverageTenLargerst(tenLargerst))