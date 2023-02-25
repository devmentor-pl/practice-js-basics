const arr = createRandomArray(1,100);

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
    const largestArr = arr.slice(1,11);

    return largestArr;
}

const largest = getLargest(arr);

console.log(largest);