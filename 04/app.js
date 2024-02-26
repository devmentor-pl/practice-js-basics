// Zadanie 1
const arr = createArray(1, 100);
console.log(arr);

function createArray(min, max) {
    const newArray = new Array()
    
    for(let i = min; i < max; i ++) {
        const num = Math.round(Math.random() * max)
        
        if(newArray.length < 20) {
           newArray.push(num);
        }
    }
    
    return newArray;
}

// Zadanie 2

const largest = getLargest(arr);
console.log(largest);

arr.sort(arrSort);

function arrSort(a, b) {
    return b - a;
}

function getLargest(arr) {
    return arr.slice(0, 10);
}

// Zadanie 3 - średnia przez pętlę for

// const avg = getAvg([1, 2, 3, 4, 5]);
// console.log(avg);

// function getAvg(arr) {
//     let sum3 = 0;
//     for(let i = 0; i < arr.length; i ++) {
//         sum3 += arr[i]; 
//     }
//     const avg = sum3 / arr.length;
//     return avg;
// }

// Zadanie 3 - średnia przez forEach()

const avg = getAvg([1, 2, 3, 4, 5]);
console.log(avg);

function getAvg(arr) {
    let sum3 = 0;
    arr.forEach(function(num) {
        sum3 += num;
        arr.length ++;
    })
    const avg = sum3 / arr.length;
    return avg;
}

// Zadanie 4 

const arr4 = createArray(10, 200); 
const arr4Max = arr4.sort(arrSort);
const arr4Largest = getLargest(arr4Max);
console.log(arr4Largest);
const avgLargest = getAvg(arr4Largest);
console.log(avgLargest);
