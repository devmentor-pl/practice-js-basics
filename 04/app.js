
function randomArr(min, max) {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
        const num = Math.round(Math.random() * (max - min) + min);
        arr.push(num);
    }
    return arr;
}

console.log(randomArr(1,20));

let arr2 = randomArr(1,100);

arr2.sort(function(a,b) {
    return b - a;
});

console.log(arr2);

let biggest = arr2.slice(0,10);
console.log(biggest);

let sum = biggest.reduce(function(a,b) {
    return (a+b);
});
let average = sum /  biggest.length;
console.log(average);





let arr3 = randomArr(10,200);

arr3.sort(function(a,b) {
    return b - a;
});
console.log(arr3);


let biggest3 = arr3.slice(0,10);
console.log(biggest3);

let sum3 = biggest3.reduce(function(a,b) {
    return (a+b);
});
let average3 = sum3 /  biggest3.length;
console.log(average3);