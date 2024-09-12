function createArray(min, max) {
    const arr = [];
    for(i = 0; i < 20; i++){
        const num = Math.round((Math.random() * (max-min)) + min);
        arr.push(num);
    }
    return arr;
}

//1

const arr = createArray(1, 100);
console.log(arr);

//2

function compareNumbers(a, b) {
    return b - a
 }

function getLargest(number){
    number.sort(compareNumbers);
    return number.slice(0, 10);
}

const largest = getLargest(arr);
console.log(largest);

//3

function getAvg(arr){
    let sum = 0;
    let avg = 0;
    arr.forEach(function(num){
        sum += num;
        avg = sum / arr.length

    })
    return avg;
}


const avg = getAvg([1, 2, 3, 4, 5]);
console.log(avg);

//4

const newArray = createArray(10, 200);
console.log(newArray);

const largestNumbers = getLargest(newArray);
console.log(largestNumbers);

const avgNewArray = getAvg(largestNumbers);
console.log(avgNewArray);


    





