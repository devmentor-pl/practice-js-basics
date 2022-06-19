// -------------1.--------------

const arr = createArray(1, 100);

function createArray(min, max) {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.ceil(Math.random() * (max - min)) + min);
    }
    return arr;
}
console.log(arr);

// -------------2.--------------

const largest = getLargest(arr);

function getLargest(arr) {
    const newArr = arr.sort((a, b) => b - a);
    return newArr.slice(0, 10);
}

console.log(largest);

// -------------3.--------------

const avg = getAvg(largest);

function getAvg(arr) {
    const avg = arr.reduce((total, num) => (total + num)) / arr.length;
    return avg;
}

console.log(avg);

// -------------4.--------------

const newArr = createArray(10, 200);
console.log(newArr);
const newLargestArr = getLargest(newArr);
console.log(newLargestArr);
const newAvg = getAvg(newLargestArr);
console.log(newAvg);

// -------------4. sama średnia arytmet. --------------

console.log(getAvg(getLargest(createArray(10,200))));

