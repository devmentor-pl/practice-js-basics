const arr = createArray(10,200)
const sortedArr =  getSorted(arr);
const meanArr = getMean(sortedArr);

console.log(arr);
console.log(sortedArr);
console.log(meanArr);

function createArray (min, max) {
    const array = [];
    for(let i=0; i<20; i++){
        const randomNumber = Math.floor(Math.random()*(max - min + 1 )) + min
        array.push(randomNumber);
    }
    return array;
}

function getSorted (array) {
    array.sort(function (a,b){
        return b-a; 
    });
    const tenLargest = array.slice(0, 10); 
    return tenLargest;
}

function getMean(array) {
    const sum = array.reduce(sumUp,0);
    const mean = sum / array.length;
    
    function sumUp(accumulator, value) {
        return accumulator + value;
    }

    return mean;
}
