const arr = createArray(1, 100);

function createArray (min, max) {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * (max-min)) + min);
    }
    return arr;
}

console.log(arr);

const largest = getLargest(arr);

function getLargest(arr) {
    const newArr = arr.sort(function(a, b) {
        return b - a;
    });
    return newArr.slice(0,10);
} 

console.log(largest);


function getAvr(largets) {
    const sum = largest.reduce(((a, b) => a+b), 0);
    return sum / largest.length;
}



const avr = getAvr();
console.log(avr)




