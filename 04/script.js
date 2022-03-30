const min = 10;
const max = 200;


const arr = createArray(min, max);
console.log(arr);

const largest = sortAndCut(arr);
console.log(largest);


const avg = aritmeticAvg(largest);
console.log(avg);

function createArray(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const arr = [];
    let random;

    for (let i = 0; i < 20; i++) {
        random = Math.floor(Math.random() * (max - min)) + min;
        arr.push(random);
    }
    return arr;
}



function sortAndCut(arr) {
    arr.sort(function (a, b) { return b - a });
    const slicedArr = arr.slice(0, 10);

    return slicedArr;
}


function aritmeticAvg(arr) {
    let aritmeticNumber = 0;
    arr.forEach(function (element) {
        aritmeticNumber += element;
    });

    return aritmeticNumber / arr.length;
}