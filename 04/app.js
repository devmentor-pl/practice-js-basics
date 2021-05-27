function createArr(min, max) {
    let arr = [];
    for(let i = 0; i < 20; i++) {
        const randInt = generateRadnomInt(min, max);
        arr.push(randInt);
    }
    return arr;
}

function generateRadnomInt(min, max) {
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    if(min > max) {
        let tmp = min;
        min = max;
        max = tmp;
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const arr = createArr(1, 100);
console.log(arr);

function getLargest(arr) {
    return arr.sort(function(a, b) {return b - a}).slice(0, 10);
}

function getAverage(arr) {
    let sum = 0;
    arr.forEach(function(el) {
        sum += el;
    })
    return sum / arr.length;
}

const largest = getLargest(arr);
console.log(largest); 
const average = getAverage(largest);
console.log(average);