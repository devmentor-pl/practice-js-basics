const array = [];

function newArray(a,b) {
  for (let i=0; i <= 20 - 1; i++) {
    const randomNumbers = Math.floor(Math.random() * (b - a + 1) + a)
    array.push(randomNumbers)
  }
  return array
}

const randomArray = newArray(5,40);
console.log(randomArray)

function getLargest(arr) {
  arr.sort(function(a,b) {
    return b - a;
  });
  arr.splice(0,10)
  return array
}

const largestNumbers = getLargest(array);
console.log(largestNumbers)

let sum = 0;
function avg(showAll) {
  showAll.forEach(function(item, index) {
    sum += item;
  });
  return parseInt(sum / showAll.length)
}

const showNumbers = avg(largestNumbers)
console.log(showNumbers)










