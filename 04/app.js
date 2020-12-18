const array = createArray(1, 100);
const largest = getLargestNumber(array);
const getAverage = getAvg(largest);

console.log(array);
console.log(largest);
console.log(getAverage);
function createArray(min, max) {
    const arr = [];

    for(let i = 0; i <= 20; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }

    return arr;
}

function getLargestNumber(arr) {
    return arr.sort(function(firstEl, secondEl) {
        return secondEl - firstEl;
    }).slice(10);
}

function getAvg(par1) {
    let average = 0;
    par1.forEach(element => {
        average += element;
        return average;
    });
  return Math.floor(average / 10);
}
