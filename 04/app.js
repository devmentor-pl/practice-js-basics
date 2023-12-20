function createArray(min, max) {
    const arr = [];
    for(i = 0; i < 20; i++){
        const num = Math.round((Math.random() * (max-min)) + min);
        arr.push(num);
    }
    return arr;
}

const arr = createArray(1, 100);
console.log(arr);

function compareNumbers(a, b) {
    return b - a
 }

function largest(number){
    number.sort(compareNumbers);
    return number.slice(0, 10);
}

const largest = largest(arr);
console.log(largest);

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

const newArray = createArray(10, 200);

const largestNumbers = getLargest(newArray);

const avgNewArray = getAvg(largestNumbers);

