const arr = createRandomArray(10, 200);
console.log(arr);

function createRandomArray(min, max) {
    const arr = [];
    const len = 20
    for(let i=0; i<len; i++) {
        arr.push(Math.round(Math.random() * (max-min) + min ));
    }

    return arr;
}

function getLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr.slice(0, 10)
}

const largest = getLargest(arr);
console.log(largest);

function getAvg(arr) {
    const sum = arr.reduce(function(a, b) {
        return a + b;
    }, 0);

    return sum / arr.length;
} 

const avg = getAvg(largest)
console.log(avg)