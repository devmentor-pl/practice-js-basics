const min = 1;
const max = 100;


const arr = makeArrWithRandomNums(min,max);

const top10Nums = sortArr(arr);
console.log(top10Nums);
console.log('avg: ', calcAvg(arr))


function makeArrWithRandomNums(){
    const nums = [];
    for (let i = 0; i < 20; i++) {
        nums.push(randomNumber(min,max));
    }
    return nums;
}

function sortArr(arr){
    arr.sort(function(a, b) {
        return b - a;
      })
    console.log(arr);
    const top10 = arr.slice(0,10);
    return top10;
}

function calcAvg(arr){
   let sum = 0;
   arr.forEach(element => {
    sum += element;
   });
   return sum/arr.length;
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}