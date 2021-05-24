let arr = [];

function createArray(min, max) {
    for (let i = 0; i < 20; i++) {
        arr.push(Math.round(Math.random() * (max - min) + min));
    }
}

function sort(x) {
    return arr = x.sort(function (a, b) {
        return b-a;
    }).slice(0,10);
}

function getAvg(x) {
    let sum = 0;
    x.forEach (el => sum += el);
    return sum / x.length;
}

createArray(5,100);
console.log(arr);
console.log(sort(arr));
console.log(getAvg(arr));