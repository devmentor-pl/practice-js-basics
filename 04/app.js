

const arr = createArray();
console.log(arr);

const largest = getLargest(arr);
console.log(largest);


const avg = getAvg(largest);
console.log(avg);

const arr2 = createArray(getRandomNumber(1, 200));
console.log(arr2);

const largest2 = getLargest(arr2);
console.log(largest2);

const avg2 = getAvg(largest2);
console.log(avg2);


function createArray() {
    const arr = [];
    const len = 20;
    for (let i = 0; i < len; i++) {
        arr.push(getRandomNumber(1, 100));
    }
    return arr
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getLargest(arr) {
    arr.sort(function (a, b) {
        return b - a;
    })
    const sorted = arr.slice(0, 10)

    return sorted
}

function getAvg(largest) {
    let sum = largest.reduce((accumulator, currentValue) => accumulator + currentValue);
    let result = sum / largest.length
    return result

}