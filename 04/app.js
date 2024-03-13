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

function sortArr(par1) {
    return par1.sort((a, b) => b - a)
}

sortArr(arr);
console.log("Posortowana tablica od największej do namniejszej", arr);

const arr2 = arr.slice(0, 10);

console.log("10 największych wartości tablicy", arr2);


function sumUp(par2) {
    return par2.reduce((first, second) => first + second);
}

console.log("Suma liczb w tablicy =", sumUp(arr2));

const arAverage = (sumUp(arr2)) / arr2.length;

console.log("Średnia arytmetyczna liczb w tablicy =", arAverage);






