const arr = createArr(10, 200);
console.log(arr);
const largest = getLargest(arr);
console.log(largest);
const average = getAverage(largest);
console.log(average);


function createArr(min, max) {
    let arr = [];
    for(let i = 0; i < 20; i++) {
        arr.push(Math.round(Math.random() * (max-min) + min));
    }
    return arr;
}

function getLargest(arr) {
    return arr.sort((a, b) => b - a).slice(0, 10);
}

function getAverage(arr) {
    if (arr.length === 0) return null;
    const sum = arr.reduce((a, b) => a+b);
    return sum/arr.length;
}
