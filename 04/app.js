const min = 1;
const max = 100;

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const arr = [];

for (let i=0; i < 20; i++) {
    arr.push(randomNumber(min, max));
}

console.log("Tablica 20 losowych liczb", arr);

arr.sort(function(a, b) {
    return b - a;
});

console.log("Posortowana tablica od największej do namniejszej", arr);

const arr2 = arr.slice(0, 10);

console.log("10 największych wartości tablicy", arr2);




