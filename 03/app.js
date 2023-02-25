const min = 1;
const max = 100;


const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const arr = [];



function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

arr.push(a, b, c);
arr.sort(function(a, b){
    return b - a;
});


function getSum(el){
    parseInt(el);
    console.log(arr[0] + arr[1]);
}


console.log(arr);
console.log(arr[0],arr[1]);

getSum(a,b,c)