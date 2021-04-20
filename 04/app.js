
function createArray (min, max) {

    const arr = []
    for(let i = 0; i < 20; i++) {
        arr.push(Math.round((Math.random() * (max - min)) + min))
    }

    return arr;
}

function getLargest (arr) {
    
    sortArr = arr.sort(function(a,b){
        return b - a;
    });

    return sortArr.slice(0, 10);
}

function getAvg (arr) {

    let sum = 0;
    arr.forEach(function(element) {
        sum += element;
    });

    return sum /= arr.length;
}

const arr = createArray(10, 200);
console.log(arr);

const largest = getLargest(arr)
console.log(largest);

const avg = getAvg(sortArr);
console.log(avg);