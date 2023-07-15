const min = 1;
const max = 100;

function createArray(min, max) {
    const numArray = [];
    for (let i = 0; i < 20; i++) {
        numArray.push(Math.round((Math.random() * (max - min)) + min));
    }
    return numArray;
}

function getLargest(arr) {
    const sortArray = arr.sort(function(a, b){return b-a}).slice(0, 10);
    return sortArray;
}

function getAvg(largest) {
    let sum = 0;
    largest.forEach(function(num) { sum+= num});
    const average = sum / arr.length;
    return average;
}

const arr = createArray(min, max)
const largest = getLargest(arr);
const avg = getAvg(largest);



const numbersArray = createArray(10, 200);
const largestNumbers = getLargest(arr);
const average = getAvg(largest);

