const generatedArray = generateArray({ min: 0, max: 100 });
const largestTenFromArray = largestFrom(generatedArray);
const average = getAvgFrom(largestTenFromArray);
console.log(average);

function generateArray({ min, max }) {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        const number = Math.round(min + Math.random() * max);
        arr.push(number);
    }
    return arr;
}

function largestFrom(array) {
    return array.sort((a, b) => b - a).slice(0, 10);
}

function getAvgFrom(array) {
    return array.reduce((acc, value) => acc + value, 0) / array.length;
}
