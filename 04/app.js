const createArray = (min, max) => {
    const arr = [];

    for (let i = 0; i < 20; i++) {
        arr.push(getRandomInt(min, max));
    }
    return arr;
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Assumption: both min & max parameters are integers
};

const getLargest = arr => {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    return [...arr].sort((a, b) => b - a).slice(0, 10);
};


const getAverage = arr => {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
};

const testArr = createArray(10, 200);
const largestNumbersArray = getLargest(testArr);
const averageFromLargest = getAverage(largestNumbersArray);

console.log(testArr);
console.log(largestNumbersArray);
console.log(averageFromLargest);