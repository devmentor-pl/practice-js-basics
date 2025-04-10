const min = 10;
const max = 200;

const arr = createArray(min, max);
console.log("Tablica z losowymi liczbami: ", arr);

const largest = getLargest(arr);
console.log("Posortowana tablica od największej do najmniejszej: ", largest);

const avg = getAvg(largest);
console.log("Średnia arytmetyczna z 10 największych liczb w tablicy: ", avg);

function createArray(min, max){
    const arr = [];
    for(let i = 0; i < 20; i++){
        const num = Math.round(Math.random() * (max - min) + min);
        arr.push(num);
    }

    return arr;
}

function getLargest(array){
    const sortedArray = array.sort((a,b)=>{return b - a})
    const bigNumbers = sortedArray.slice(0,10);
    return bigNumbers;
}

function getAvg(array){
    let sum = 0;
    const avg = array.forEach(element => {
        sum += element;
    });
    return sum / array.length
}