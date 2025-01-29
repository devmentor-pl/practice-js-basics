'use strict'

function createArray(min, max) {
    const newArray = []

    for(let i=0; i < 20; i++) {
        const randomNumber = Math.round((Math.random() * (max - min)) + min);
        newArray.push(randomNumber)
    }

    return newArray

}


function get10LargestNumbers(array) {
    const sortedArray = array.sort(function(a, b) 
    {
        return b - a
    });

    return sortedArray.slice(0, 10)

}


function calculateAverage(array) {
    if(array.length === 0) {
        return 0
    }

    const sumArrNumbers = array.reduce(function(acc, currentValue) {
        return acc + currentValue
    }, 0)

    return sumArrNumbers / array.length
}



const min = 10
const max = 200

const array = createArray(min, max)
console.log('Wygenerowana tablica: ' + array);

const largestNumbers = get10LargestNumbers(array)
console.log('10 największych liczb z tablicy: ' + largestNumbers);

const average = calculateAverage(largestNumbers)
console.log('Średnia arytmetyczna 10-ciu największych liczb z tablicy: ' + average);

