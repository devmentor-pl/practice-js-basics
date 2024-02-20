// Zadanie 1
const arr = createArray(1, 100);
console.log(arr);

function createArray(min, max) {
    const newArray = new Array()
    
    for(let i = min; i < max; i ++) {
        const num = Math.round(Math.random() * max)
        
        if(newArray.length < 20) {
           newArray.push(num);
        }
    }
    
    return newArray;
}

// Zadanie 2
const largest = getLargest(arr);
console.log(largest);

arr.sort(function (a, b) {
        return b - a;
});

console.log(arr);

function getLargest(arr) {
    return arr.slice(0, 10);
}

// zwraca pierwsze 10 z tablicy nieposortowanej

// Zadanie 3

