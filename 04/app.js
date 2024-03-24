const arr = createArray(10, 200);
const largest = getLargest(arr);
const avg = getAvg(largest);

console.log(arr);
console.log(largest);
console.log('Średnia z 10 największych wylosowanych liczb wynosi: '+avg);


function createArray(min, max) {
    const arr = [];
    for (i=0;i<20;i++) {
        arr.push(Math.round(Math.random() * (max - min) + min));
    }
    return arr;
}

function getLargest(input) {
    let sorted = input.slice(0, input.length);
    sorted = sorted.sort(function(a,b) { return b - a; });
    const biggerHalf = sorted.slice(0, 10);
    return biggerHalf;
}

function getAvg(input) {
    let numbers = input.slice(0,input.length);
    total = numbers.reduce(function(sum,number) { return sum + number })
    return total / input.length
}