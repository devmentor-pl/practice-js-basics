const min = 10
const max = 200

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.round(Math.random() * (max - min) + min));
}
function getLargest(x,y){
    return y-x
}
console.log(arr);
const largest = arr.slice(-10).sort(getLargest)
let sum=0;
console.log(largest);
largest.forEach((e) => {
    sum= (sum+e)
});
sum=sum/10
console.log(sum);