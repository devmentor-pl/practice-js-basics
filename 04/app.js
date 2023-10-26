

const arr = createArray();
console.log(arr);

const largest = getLargest(arr);
console.log(largest);


const avg = getAvg(largest);
console.log(avg);


function createArray() {
    const arr = [];
    const len = 20;
    for(let i=0; i<len; i++) {
        arr.push(getRandomNumber(1,100));
    }
    return arr
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function getLargest(arr) {
arr.sort(function(a,b) {
    return b-a;
})
const sorted = arr.slice(0,10)

return sorted
}

function getAvg(largest) {
    const sum = largest.reduce((accumulator, currentValue) => accumulator + currentValue);
    const result = sum / arr.length
    return result

}