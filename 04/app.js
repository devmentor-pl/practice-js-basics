const arr = [];

function randomNumbers(min,max) {
    return Math.floor(Math.random()*(max-min) + min)
}

for (let i=0;i<20;i++){
    arr.push(randomNumbers(10,200));
}

const newArr = arr;
console.log(newArr);


const sorted = function () {
newArr.sort(function(a,b) {
        return a-b;
})};

sorted();
console.log(newArr);

const sliced = function () {
    return newArr.slice(10);
}

const slicedArr = sliced();
console.log(slicedArr);

let sum = 0;

slicedArr.forEach (function(num){
    sum=sum+num;

})

console.log(sum/slicedArr.length);












