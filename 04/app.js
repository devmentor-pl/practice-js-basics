
const randomArray = createArray(1, 20);
const largest = getLargest(randomArray);
const avg = getAvg([1, 2, 3, 4, 5]);
// console.log(randomArray);
// console.log(largest);
console.log(avg);

function createArray(min, max) {
    let randomNumbers = [];
    for(let i = 0; i < 20; i++) {
        randomNumbers.push(Math.floor(min + Math.random() * (max - min + 1)));
    }
    return randomNumbers;
};

function getLargest(arr) {
    const sortedArray = arr.sort(function(a, b) {
        return b - a;
    });
    return sortedArray.slice(0, 10);
};

function getAvg(arr) {
    let avg = 0;
    arr.forEach(function(num) {
        avg += num;
    })
    return avg / arr.length;
}
