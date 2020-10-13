const min = 1;
const max = 100;

const arr = createArray(1, 100);
const largest = getLargest(arr);
const avg = getAvg(largest);

console.log('Tablica: ' + arr);
console.log('Top 10: ' + largest);
console.log('Srednia top 10: ' + avg);



function createArray(min, max) {
    const arrLength = Math.round(Math.random() * (max - min) + min);
    const array = [];
    for (let i = 0; i < arrLength; i++) {
        let randomNum = Math.round(Math.random() * (max - min) + min);
        array.push(randomNum);
    }
    return array;
}

function getLargest(array) {
    const sortedArray = array.sort(function (a, b) {
        return b - a;
    });
    return sortedArray.slice(0, 10);
}

function getAvg(array) {
    let sum = 0;
    array.forEach(function (element) {
        sum += element;
    });
    return (sum / array.length);
}