const min = 10;
const max = 200;

const arr = createArray(min, max);
console.log(arr);

const largest = getLargest(arr);
console.log(largest);

const avg = getAvg(largest);
console.log(avg);


function createArray(min, max) {
    let arrTemp = [];

    for (let i = 0; i < 20; i++) {
        const newNumber = Math.round((Math.random() * (max - min)) + min);
        arrTemp.push(newNumber);
    }

    return arrTemp;
}

function getLargest(arr) {
    const sortNumbers = arr.sort(function(a, b) {
        return b - a;
    })

    const sliceNumbers = sortNumbers.slice(0, 10);

    return sliceNumbers;
}

function getAvg(arr) {
    const sum = arr.reduce(function(acc, value) {
        return acc + value;
    }, 0)

    return sum / arr.length;
}