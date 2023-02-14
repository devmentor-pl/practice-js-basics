const arr = createArray(10, 200);
const largest = getLargest(arr);
const avg = getAvg(largest);

function createArray(min, max) {
    let newArray = [];
    let num;
    for (let i = 0; i < 20; i++) {
        num = Math.round((Math.random() * (max - min)) + min);
        newArray.push(num); 
    }
    return newArray;     
}

function getLargest(arr) {
    return arr.sort((a, b) => b - a).slice(0, 10);
}

function getAvg(largest) {
    let sum = largest.reduce((prev, curr) => (prev + curr), 0)
    return sum / largest.length;
}

console.log(arr);
console.log(largest);
console.log(avg);