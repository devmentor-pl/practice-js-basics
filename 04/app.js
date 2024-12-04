function createArray(min, max){

    const array = [];

    for (let i = 0; i < 20; i++){
        const randomNumber = Math.round((Math.random() * (max - min)) + min);
        array.push(randomNumber);
    }

    return array;
}

function sortArray(array){
    const sortedArray = array.sort((a, b) => b - a);
    const highestNumbers = sortedArray.slice(0, 10);
    return highestNumbers;
}

function getAvg(array){
    const sum = array.reduce((acc, element) => acc + element, 0);
    const avg = sum / array.length;
    return avg;
}

const arr = createArray(10, 200);
console.log(arr);

const sort = sortArray(arr);
console.log(sort);

const avg =getAvg(sort);
console.log(avg);

