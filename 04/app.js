// 20 losowych liczb z przedziału
const arr = createArray(10,200);
console.log(arr);

function createArray(min, max) {
    const tab = [];
    for(let i = 0; i<20; i++){
        const index = Math.round((Math.random() * (max - min)) + min);
        tab.push(index);
    }
    return tab;
}

// 10 największych, posortowane
const largest = getLargest(arr);
console.log(largest);

function getLargest(tab) {
    const sortedArr = tab.sort(function(a,b){
        return b - a;
    })
    return sortedArr.slice(0,10);
}

// średnia arytmetyczna 
const avg = getAvg(largest);
console.log(avg);

function getAvg(tab) {
    let result = 0;
    tab.forEach(element => {
        result+=element;
    });
    return result/tab.length;
}