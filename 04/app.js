// 1. Napisz funkcję, która utworzy i zwróci tablicę z 20 elementami wylosowanymi z podanego zakresu. Zakres mają określać dwa parametry:
// - liczba minimalna,
// - liczba maksymalna. 

// W ciele tej funkcji wykorzystaj pętlę `for` oraz obiekt `Math`.

// Poniżej przedstawiam przykładowe działanie takiej funkcji:
// ```
// const arr = createArray(1, 100);
// console.log(arr); // [1, 4, 34, 12, 16, 45, 12, 38, 78, 99, 1, 84, 44, 61, 16, 45, 33, 31, 68, 93 ]


function createArray(min, max) {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randomNumber);
    }
    return arr;
}

// const arr = createArray(0, 100);
// console.log(arr);
const arr = createArray(10, 200);
console.log(arr);

// 2. Napisz kolejną funkcję, która posortuje liczby z otrzymanej powyżej tablicy od wartości największej do najmniejszej i zwróci tablicę zawierającą tylko 10 największych liczb. W ciele funkcji możesz użyć metod `.sort()` oraz `.slice()`.

// Poniżej przedstawiam przykładowe działanie takiej funkcji:
// ```
// const largest = getLargest(arr);
// console.log(largest); // [99, 93, 84, 78, 68, 61, 45, 45, 44, 38]
// ```

// arr.sort(function (a, b) {
//     return b - a;
// });
// console.log(arr);

// console.log(arr.slice(10));

function getLargest() {
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr.slice(0, 10);

}
const largest = getLargest(arr);
console.log(largest);

// 3. Ostatnia funkcja ma obliczać [średnią arytmetyczną](https://pl.wikipedia.org/wiki/%C5%9Arednia_arytmetyczna) z liczb przechowyanych w przekazanej przez parametr tablicy. Możesz do tego wykorzystać `.forEach()` lub `.reduce()`.

// Przykładowe działanie takiej funkcji to:
// ```
// const avg = getAvg([1, 2, 3, 4, 5]);
// console.log(avg); // 3
// ```

function getAvg(arr) {
    // return arr.reduce((total, arr) => (total + arr), 0)/arr.length;
    let sum = 0;
    arr.forEach(num => {
        sum += num;

    });
    return sum / arr.length;

}

const avg = getAvg(largest);
console.log(avg);

// 4. Wykorzystaj napisane funkcje w taki sposób, aby utworzyć tablicę składającą się z 20 losowych liczb z przedziału od 10 do 200. Z utworzonej tablicy wybiesz 10 największych i obliczych ich średnią arytmetyczną.

// Zadbaj o odpowiednie nazwy dla funkcji - nie muszą być one identyczne jak w przykładach.

