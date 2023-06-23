function createArray(min, max) {
    const arr = new Array(20);
    
    for (let i = 0; i < arr.length; i++) {        
        let numRandom = Math.round(Math.random() * (max - min) + min);
        arr[i] = numRandom;
    }

    return arr;
}

function getLargest(arr) {
    return arr.sort((a, b) => b - a).slice(0, 9);
}

function getAvg(arr) {
    return arr.reduce((a, b) => (a + b), 0) / arr.length;
}

const arr = createArray(10, 200);
console.log(arr);

const largest = getLargest(arr);
console.log(largest);

const avg = getAvg(arr);
console.log(avg);