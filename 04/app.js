

const arr = arrayRandom20(10, 200);
const largest = getLargest(arr);
const avg = getAvg(largest);

console.log(arr, largest, avg);


function arrayRandom20(min, max) {

    const numbers = [];
    for (let i = 1; i <= 20; i++) {
        const num = Math.round(Math.random() * (max - min)) + min;
        numbers.push(num);
    }

    return numbers;
}



function getLargest(arr) {

    arr.sort(function (a, b) {
        return b - a;
    });

    return arr.slice(0, 10);

}

function getAvg(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce(function (acc, curr) {
        return acc + curr;

    }, 0);
    return sum / arr.length;
}
console.log(getLargest(arrayRandom20(0, 20)))





