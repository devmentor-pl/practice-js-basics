const arr = createRandomArray(10,200);

function createRandomArray(min, max){
    const arr = [];
    const elNum = 20;
    for(i=0; i<elNum; i++){
        arr.push(Math.round(Math.random() * (max-min) + min ));
    }

    return arr;
}

console.log(arr);

function getLargest(arr){
    arr.sort(function(a, b){
        return b - a;
    });
    const largestArr = arr.slice(0,10);

    return largestArr;
}

const largest = getLargest(arr);

console.log(largest);

function getAvg(array){
    let sum = 0;
    array.forEach(function(num){
        sum += num;
    });
    const avg = sum / array.length;
    
    return avg;
}

const avg = getAvg(largest);

console.log(avg);