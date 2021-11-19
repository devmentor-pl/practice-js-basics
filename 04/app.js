
function createArray(min,max){
    const array =[];
    const sizeArray = 20;
    for(let i=0; i<sizeArray; i++){
        let number = Math.round((Math.random() * (max - min)) + min);
        array.push(number);
    }
    return array;
}

function sortArray(newArray){
    const resultArray = newArray.sort(function(a,b){
        return a - b;
    }).slice(10,20);
    return resultArray;
}

function avgArray(value){
    let sum = 0;
    value.forEach(function(element) {
        sum +=element;
    },0);
    sum = (sum / value.length);
    return sum;
}

const myArray = createArray(10,200);
console.log('Tablica 20 losowych elementów ' + myArray);

const biggestNumbers = sortArray(myArray);
console.log('Tablica 10 najwiekszych elementów ' + biggestNumbers);

console.log('Srednia 10 najwiekszych elementów ' + avgArray(biggestNumbers));

