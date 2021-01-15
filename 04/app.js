//Napisz funkcję, która utworzy tablicę z 20 elementami i ją zwróci. Funkcja ta ma przyjmować dwa parametry tj. liczbę minimalną oraz maksymalną jaka może zostać wylosowana. W ciele tej funkcji wykorzystaj pętle `for` oraz obiekt `Math`

function randomArr(min, max) {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
        const num = Math.round(Math.random() * (max - min) + min);
        arr.push(num);
    }
    return arr;
}

console.log(randomArr(1,20));


// kolejna funkcja ma przymować przez argument tablicę i sortować ją od wartości największej do najmniejszej. 
let arr2 = randomArr(1,100);

arr2.sort(function(a,b) {
    return b - a;
});

console.log(arr2);

// Następnie ma zwrócić tablicę zawierającą tylko 10 największych liczb. W ciele funkcji możesz użyć metod `.sort()` oraz `.slice()`
let biggest = arr2.slice(0,10);
console.log(biggest);


// Ostatnia funkcja ma obliczać [średnią arytmetyczną]
let sum = biggest.reduce(function(a,b) {
    return (a+b);
});
let average = sum /  biggest.length;
console.log(average);




// Wykorzystaj napisane funkcje w taki sposób, aby utworzyć tablicę składającą się z 20 losowych liczb z przedziału od 10 do 200. Z utworzonej tablicy wybiesz 10 największych i obliczych ich średnią arytmetyczną.


let arr3 = randomArr(10,200);

arr3.sort(function(a,b) {
    return b - a;
});
console.log(arr3);


let biggest3 = arr3.slice(0,10);
console.log(biggest3);

let sum3 = biggest3.reduce(function(a,b) {
    return (a+b);
});
let average3 = sum3 /  biggest3.length;
console.log(average3);