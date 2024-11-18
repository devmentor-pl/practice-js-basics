
function createArray(min, max) {
    const array = [];

    for (let i = 0; i < 20; i++) {
        const randNumber = Math.round((Math.random() * (max - min)) + min)
        array.push(Math.round(randNumber));
    }
    return array;

}
const arr = createArray(1, 100);
console.log(arr)

function getLargest (numbers) {
    numbers.sort(function (a,b) {
        return b-a;
        
    })
    const largest =  numbers.slice(0,10);
    return largest;
}
const largest = getLargest(arr);
console.log(largest);

function getAvg(arr) {
    const sum = arr.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    return sum / arr.length;
  }
  
  const average = getAvg(arr);
  console.log(average);
  
const arr2 = createArray(10, 200);
console.log(arr2);
const largest2 = getLargest(arr2);
console.log(largest2);
const average2 = getAvg(arr2);
console.log(average2);