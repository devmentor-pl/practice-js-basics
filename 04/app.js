const min = 1;
const max = 200;
const arr = createArray(min, max);
console.log(arr);
const largest = getLargest(arr);
console.log(largest);
const avg = getAvg(largest);
console.log('Średnia z 10 najwyższych liczb wynosi: ' +avg);

function createArray(min, max) {
    const arr = [];
    for(let i = 0; arr.length < 20; i++) {
        const num = randomNumber(min, max);
        if(arr.includes(num)) {
            
        } else {
            arr.push(num);
        }
    }
    return arr;
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getLargest(arr) {
    const largest = arr;
    largest.sort(function(a, b) {
        return b - a;
    });
    const half = largest.slice(0, 10);
    return half;
}

function getAvg(largest) {
    let sum = 0;
    let avg;
    largest.forEach(function(num) {
        sum += num;
    })
    avg = sum / largest.length;
    return avg;
}