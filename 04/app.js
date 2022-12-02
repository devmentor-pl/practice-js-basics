const min = 10;
const max = 200;
const randomArray = createArray(min, max);
const largest = getLargest(randomArray);
const avg = getAvg(largest);

console.log("losowa tablica: ",randomArray);
console.log("10 największych liczb: ",largest);
console.log("średnia 10 najwiękzych liczb wynosi: ",avg);

function createArray(min, max) {
    const tab = [];
    for(let i = 0; i < 20; i++) {
        tab.push(Math.floor(Math.random()*(max - min) + min + 1));
    }
    return tab;
}

function getLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr.slice(0, 10);

}


function getAvg(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });

    return sum/arr.length;
}

// const avg = getAvg(largest);
// console.log("średnia 10 najwiękzych liczb wynosi: ",avg);