
const randomArray = createArray(1, 20);
const largest = getLargest(randomArray);
console.log(randomArray);
console.log(largest);

function createArray(min, max) {
    let randomNumbers = [];
    for(let i = 0; i < 20; i++) {
        randomNumbers.push(Math.floor(min + Math.random() * (max - min + 1)));
    }
    return randomNumbers;
};

function getLargest(arr) {
    const sortedArray = arr.sort(function(a, b) {
        return b - a;
    });
    return sortedArray.slice(0, 10);
};
