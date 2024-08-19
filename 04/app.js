function createArray(min, max) {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randomNumber);
    }
    return arr;
}

function getLargest(arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr.slice(0, 10);
}

function getAvg(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

const randomArray = createArray(10, 200);
console.log('Wylosowana tablica:', randomArray);

const largestNumbers = getLargest(randomArray);
console.log('10 największych liczb:', largestNumbers);

const average = getAvg(largestNumbers);
console.log('Średnia arytmetyczna 10 największych liczb:', average);