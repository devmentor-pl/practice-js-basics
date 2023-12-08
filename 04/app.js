const arr = newArray(10, 200);
console.log(arr);
const largest = getLargest(arr);
console.log(largest);
const average = getAverage(largest); 
console.log(average);

function newArray(min, max) {
    let arr = [];
    let element;
    for(let i=1; i<=20; i++) {
        element = Math.round(Math.random() * (max-min)+min);
        arr.push(element);
    }
    return arr;
}

function getLargest(arr) {
    arr.sort(function(a, b) {
        return b-a;
    });
    const newArr = arr.slice(0, 10);
    return newArr;
}

function getAverage(arr) {
    let sum = 0;
    let average = 0;
    arr.forEach(function(element, index){
        sum+=element;
    });
    average = sum/arr.length;
    return average;  
}

















