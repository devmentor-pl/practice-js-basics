const min = 1;
const max = 100;

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const arr = [];

for (let i=0; i < 20; i++) {
    arr.push(randomNumber(min, max));
}

console.log(arr);



