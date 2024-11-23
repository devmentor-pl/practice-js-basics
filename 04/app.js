function createArray(min, max) {
    const array = [];

    for (let i = 0; i < 20; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNum);
    }
    return array;
}

function getLargestNumbers(arr) {
    const sortedArr = arr.sort((a, b) => b - a);

    return sortedArr.slice(0, 10);
}
 
function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);

    return sum / arr.length;
}

 
const randomArray = createArray(10, 200);
console.log("Wylosowana tablica:", randomArray);

const largestNumbers = getLargestNumbers(randomArray);
console.log("10 największych liczb:", largestNumbers);

const averageLargest = calculateAverage(largestNumbers);
console.log("Średnia z 10 największych liczb:", averageLargest)

