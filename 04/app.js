const createArr = function (min, max) {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        const randomNumber = Math.round((Math.random() * (max - min)) + min);
        arr.push(randomNumber);
    }
    return arr;
}

const getLargest = function (arr) {
    arr.sort((a, b) => b - a);
    return arr.slice(0, 10);
}

const getAvg = function (array) {
    const sum = array.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);

    return sum / array.length;
}

const array = createArr(10, 200);
const largestNumbers = getLargest(array);
const average = getAvg(largestNumbers);

console.log(array);
console.log(largestNumbers);
console.log(average);