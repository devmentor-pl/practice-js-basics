function getTwentyElements(min, max) {
    let arrayOfTwenty = [];

    for(let i=0; i<20; i++) {
        let num = Math.round(Math.random() * (max-min) + min);
        arrayOfTwenty.push(num);
    }

    return arrayOfTwenty;
}

function getBiggestTenFromArray(array) {
    array.sort(function(a, b) {
        return b-a;
    });

    return array.slice(0, 10);
}

function average(array) {
    if(array.length === 0) {
        return 0;
    }

    return array.reduce(function(acc, current) {
        return acc += current;
    }, 0) / array.length;    
}

let arr = getTwentyElements(10, 200);
console.log(arr);
let sortedArr = getBiggestTenFromArray(arr);
console.log(sortedArr);
let avg = average(sortedArr);
console.log(avg);