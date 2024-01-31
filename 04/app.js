function createArray(min, max) {
    let tab = []
    for(let i = 1; i <= 20; i++){
        tab.push(Math.round((Math.random() * (max - min)) + min));
    }
    return tab
}

function sortArray(arr) {
    let sortedArr = arr.sort((a,b)=>b-a).slice(0,10)
    return sortedArr
}

function getAvg(arr) {
    let sum = 0
    let x = arr.length

    arr.forEach(function(number) {
        sum += number
    });

    return sum / x
}

const arr = createArray(10, 200)
const sortArr = sortArray(arr)
const avg = getAvg(sortArr);

console.log(avg);