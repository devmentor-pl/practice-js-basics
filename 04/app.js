const arr = getArray(10, 200);
const largest = getLargest(arr);

const avg = getAvg(largest);

console.log('Średnia to', avg)


function getAvg(x) {

    const y = x;
    console.log(y);

    const avg = (y.reduce(function (a, b) {
        return a + b;
    }) / y.length);

    return avg;
}

function getLargest(x) {

    const arrAlfa = x;
    const arrBeta = arrAlfa.sort(function (a, b) {
        return b - a;
    }).slice(0, 10);

    return arrBeta;
}

function getArray(min, max) {

    const arr = [];

    for (let i = 1; i <= 20; i++) {

        const num = Math.round((Math.random() * (max - min)) + min);
        arr.push(num);
    }
    return arr;
}