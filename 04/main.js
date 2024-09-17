const arr = createArray(1, 100);

function createArray(min, max) {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.ceil(Math.random() * (max - min)) + min);
    }
    return arr;
}
const largest = getLargest(arr);

function getLargest(arr) {
    const newArr = arr.sort((x, y) => y - x);
    return newArr.slice(-10);
}
const avg = getAvg(largest);

function getAvg(arr) {
    const avg = arr.reduce((total, num) => (total + num)) / arr.length;
    return avg;
}
const newArr = createArray(10, 200);
console.log(newArr);
const newLargestArr = getLargest(newArr);
console.log(newLargestArr);
const newAvg = getAvg(newLargestArr);
console.log(newAvg);
