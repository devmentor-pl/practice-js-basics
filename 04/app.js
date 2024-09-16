
function createArray(min, max) {
    const newArray = [];
    for (let i = 0; i < 20; i++) {
        const num = Math.round((Math.random() * (max - min)) + min);
        newArray.push(num);
    }
    return newArray;
}

const arr = createArray(1, 100);
console.log(arr);



function getLargest(array) {

    array.sort(function (a, b) {
        return b - a
    })
    console.log(array)

    return array.slice(0, 10)
}

const largest = getLargest(arr);
console.log(largest)

function getAvg(arr) {
    const sum = arr.reduce(function (total, curr) {
        return total + curr
    });
    return sum / arr.length
}

const avg = getAvg(arr)
console.log(avg)

const newArray = createArray(10, 200);
const newLargest = getLargest(newArray);
const newAvg = getAvg(newLargest);
console.log(newArray, newLargest, newAvg)