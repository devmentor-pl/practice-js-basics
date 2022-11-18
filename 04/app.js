
const arr = createArray(10, 200);
const largest = getLargest(arr);
const avg = getAvg(largest);

console.log(arr, largest, avg);


function createArray(min, max) {
    const arr = []

    for(let i=0; i < 20; i++) {
        const number = Math.round(Math.random() * (max - min) + min);
        arr.push(number);
    }

    return arr;
}


// console.log(createArray(1,20));

function getLargest(arr) {
    arr.sort(function(a,b) {
        return b - a;
    });

    return arr.slice(0, 10);
}

getLargest(createArray(1, 20));


function getAvg(arr) {

    if(arr.length === 0) {
        return 0;
    }

    const sum = arr.reduce(function(accumulator, current) {
        return accumulator + current;
    }, 0);

    return sum / arr.length;
}

// const avg = getAvg([1, 2, 3, 4, 5]);

// console.log(avg); // 3