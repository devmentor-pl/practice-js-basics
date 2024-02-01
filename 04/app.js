function createArray (min, max) {
    const array = [];
    for (let i = 0; i < 20; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;

}

function sortArray (array) {
    let sortedArray = array.sort(function (a, b) {
        return b - a;
    });
    return sortedArray.slice(0, 10);
}

function calculateAverage (sortedArray) {
    let average = sortedArray.reduce((a,b) => a + b, 0) / sortedArray.length;
    return average;
}

const generatedArray = createArray(1, 100);
console.log(generatedArray);

const sortedArray = sortArray(generatedArray);
console.log(sortedArray);

const average = calculateAverage(sortedArray);
console.log(average);

