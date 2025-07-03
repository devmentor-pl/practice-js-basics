function createArray(min, max) {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randomNumber);
    }
    return arr;
}

const arr = createArray(10, 200);
console.log(arr);



function getLargest() {
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr.slice(0, 10);

}
const largest = getLargest(arr);
console.log(largest);



function getAvg(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum / arr.length;

}

const avg = getAvg(largest);
console.log(avg);



