// 1

let arr = [];

const createArray = function (min, max) {
   for(let i = 0; i<20; i++ ) {
         const randomNumber = Math.round((Math.random() * (max - min)) + min);
         arr.push(randomNumber);
    }
    return arr;
};

// createArray(1, 100);
// console.log(arr); 

// 2 

function getLargest(arr) {
    const largest = arr.sort(function(a, b) {
        return b-a;
    });
    return largest.slice(0, 10);
}

// getLargest(arr);
// console.log(getLargest(arr));

// 3

function getAvg(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        sum += num;
        return sum; 
    });
    const avg = sum / arr.length; 
    return avg;
}

// getAvg(arr);
// console.log(getAvg(arr));

// 4


const myArr = createArray(10, 200);
console.log(myArr);

const myLargest = getLargest(myArr);
console.log(myLargest);

const myAvg = getAvg(myArr);
console.log(myAvg);


