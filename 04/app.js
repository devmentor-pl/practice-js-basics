function createArray(min, max) {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        let number = Math.round((Math.random() * (max - min)) + min);
        arr.push(number);
    }
    return arr;
}

function getLargest(arr) {
    arr.sort((a, b) => b - a)
    return arr.slice(0, 10);
}

function getAvg(arr) {
    // .forEach()
    let sum = 0;
    arr.forEach((item) => {
        sum += item;
    })
    return sum / arr.length;

    // .reduce()
    // const avg = (arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / arr.length;
    // return avg;
}

const arr = createArray(10, 200);
const largest = getLargest(arr);
const avg = getAvg(largest);

console.log(`Wylosowane liczby: ${arr}`);
console.log(`10 największych liczb to: ${largest}`);
console.log(`Średnia arytmetyczna 10 największych liczb to: ${avg}`);