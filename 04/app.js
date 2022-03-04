const arr = createArray(10, 200);
const largest = getLargest(arr);
const avg = getAvg(largest);

function createArray(min, max) {
    const arr = [];
    for(let i=1; i<=20; i++) {
        const num = Math.round((Math.random() * (max - min)) + min);
        arr.push(num);
    } 
    return arr;
}

function getLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    const tenNumbers = arr.slice(0, 10);
    return tenNumbers;
}

function getAvg(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        sum += num;
        return sum;
    });
    const arrAvg = sum / arr.length;
    return arrAvg;
}

