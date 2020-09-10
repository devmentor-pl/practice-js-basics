const array = createArray20(10, 200);
const arrayReduced = getLargests10(array);
const avg = getAvg(arrayReduced);

console.log(array);
console.log(arrayReduced);
console.log(avg);

function createArray20(minValue, maxValue) {
    const arr = [];

    for(let i = 0; i < 20; i++) {
        arr.push(Math.round((Math.random() * maxValue - minValue) + minValue));
    }
    return arr;
}

function getLargests10(arr) {
    const arrCopy = arr.slice();
    arrCopy.sort(function(a, b) {
         return b - a;
    });
    return arrCopy.slice(0, 10);
}

function getAvg(arr) {
    return arr.reduce(function(total, a) {
        return total + a;
    }) / 10;
}
