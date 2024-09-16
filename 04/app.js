// const start = 1;
// const end = 100;
// const arr = [];
// while(arr.length < 20) {
//     const num = Math.round(Math.random() * end);
//     if(arr.includes(num)) {
//     } else {
//         arr.push(num);
//     }
// }
// console.log(arr);

const start = 1;
const end = 100;
const arr = [];
for(let i=1; i<=20; i++) {
    const num = Math.round(Math.random() * end);
    if(arr.includes(num)) {
    } else {
        arr.push(num);
    }
}


console.log(arr);

arr.sort(function(a,b) {
    return b - a;
});
console.log(arr);


const newArray = arr.slice(10); //wylosował 10 najmniejszych a nie największych 
console.log(newArray);


sum = 0;
arr.forEach(function(num) {
    sum += num
});
average = sum / arr.length;
console.log(average); 

