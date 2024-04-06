function getTwentyElements(min, max) {
    let arrayOfTwenty = [];

    for(let i=0; i<20; i++) {
        let num = Math.round(Math.random() * (max-min) + min);
        arrayOfTwenty.push(num);
    }

    return arrayOfTwenty;
}

function getBiggestTenFromArray(array) {
    let sortedArray = array.sort(function(a, b) {
        return b-a;
    });

    return sortedArray.slice(0, 10);
}

function average(array) {
    return array.reduce(function(acc, current) {
        return acc += current;
    }) / array.length;    
}

let arr = getTwentyElements(10, 200);
console.log(arr);
let sortedArr = getBiggestTenFromArray(arr);
console.log(sortedArr);
let avg = average(sortedArr);
console.log(avg);