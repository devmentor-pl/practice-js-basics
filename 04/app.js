const createArray = (min, max) => {
    const randomNumbers = [];
    for (let i = 1; i <= 20; i++) {
        randomNumbers.push(Math.round((Math.random() * max - min) + min));
    }
    return randomNumbers;
}

const array = createArray(1, 100);
console.log(array);

const getLargest = arr => {
    let n = 10;
    arr.sort((a, b) => b - a);
    const first10 = arr.slice(0, n);
    return first10;
}
const largest = getLargest(array);
console.log(largest);

let getAvg = arr => arr.reduce((a, b) => a + b) / arr.length;

const avg = getAvg(largest);
console.log(avg);