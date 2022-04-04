const arr = createArray(10, 200);
console.log(arr);

function createArray(min, max) {
    const arr = [];
    for(i=0; i<20; i++) {        
        const n = Math.round((Math.random() * (max - min)) + min);
        arr.push(n);
    }
    return arr;
}

const largest = getLargest(arr);
console.log(largest);

function getLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr.slice(0, 10);
}

const avg = getAvg(largest);
console.log(avg);

function getAvg(arr) {
    if(arr.length === 0) {
        return 0;
    }
    return arr.reduce((a, b) => (a + b)) / arr.length;
}