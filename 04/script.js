const arr = createArray(10, 200);
console.log("Tablica 20 randomowych: ", arr);
const biggest = getLargest(arr);
console.log("Tablica największych dziesięciu: ", biggest);
const avg = getAvg(biggest);
console.log("Średnia z największych liczb: ", avg);


///part 1
// const arr = createArray(1, 100);
// // console.log(arr); // [1, 4, 34, 12, 16, 45, 12, 38, 78, 99, 1, 84, 44, 61, 16, 45, 33, 31, 68, 93 ]

function createArray(min, max) {
    if(typeof(min) !== 'number' || typeof(max) !== 'number') return null;
    const arr = [];

    for(let i = 0; i < 20; i++) {
        arr.push(getRandomFromRange(min, max));
    }
    return arr;
}

function getRandomFromRange(min, max) {
    return Math.round(Math.round(Math.random() * (max- min) + min));
}

//part 2
// const largest = getLargest(arr);
// console.log(largest); // [99, 93, 84, 78, 68, 61, 45, 45, 44, 38]

function getLargest(arr) {
    const sorted = arr.sort(function compare(a, b) { return a - b; });
    return sorted.slice(sorted.length - 10, sorted.length);
}

//part 3
// const avg = getAvg([1, 2, 3, 4, 5]);
// console.log(avg); // 3

function getAvg(arr) {
    const sum = arr.reduce(function(prev, curr) { return curr + prev; });
    return sum / arr.length; 
}