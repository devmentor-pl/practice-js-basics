function createArray(min, max) {
    let arr = [];
    for(let i=0; i<20; i++){
        arr[i] = parseInt(Math.random() * (max - min) + min);
    }
    return arr;
}

const arr = createArray(9, 201);
console.log(arr);
const arrLargest = getLargest(arr);
console.log(arrLargest);
const arrAvg = getAvg(arrLargest);
console.log(arrAvg);

function getLargest (arr) {
    function compare(a, b){
        return b - a;
    }
    arr = arr.sort(compare);
    arr = arr.slice(0, arr.length/2);
    return arr;
}

function getAvg(arr) {
    let avg = 0;
    arr.forEach(function(item){
        avg += item;
    });
    return avg / arr.length;
}
