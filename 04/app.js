const arr = createArray(10, 200);
console.log(arr);

function createArray (min, max) {
    
    const arr = [];
    for(let i=1; i<=20; i++) {

        const number = Math.round( (Math.random() * (max - min)) + min);
        arr.push(number);
    }
    return arr;
}

const largest = getLargest(arr);
console.log('Przesortowana tablica zawierająca 10 największych liczb' , largest);

function getLargest(arr) {
    const arr1 = arr;
    const arr2 = arr1.sort(function(a,b) {
        return b - a;
    }) .slice(0,10);
    return arr2;
}

const avg = getAvg(largest);
console.log('Średnia arytmetyczna 10 największych liczb: ' , avg);

function getAvg(arr) {
    const avg = (arr.reduce( function(a,b) {
        return a + b;
    })/arr.length );
    return avg;
}


