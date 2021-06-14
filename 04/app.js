//1.
function getArray(min,max){
    const arr= new Array(20);
    for(var i=0; i<arr.length; i++){
        arr[i]=Math.round((Math.random() * (max - min)) + min);
    }
    return arr;
}
const myArr = getArray(10,200);
console.log("My array: " + myArr);

//2.
let sortArr= new Array;
function getLargest(ar){
    sortArr = ar.sort( (a, b) => b-a);
    return sortArr.slice(0,10)
}
const largest = getLargest(myArr);
console.log("10 largest array elements: " + largest);
//console.log("Posortowane malejąco wartości: " + sortArr);

//3.
function getAvg(arr){
    var sum = 0;    
    arr.forEach(function (item){
        sum += item;
    });
    return sum/arr.length
}
const avg = getAvg(largest)
console.log("Average of 10 largests array elements = " + avg);
