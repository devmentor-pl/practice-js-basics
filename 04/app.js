const arr = createArray(10, 200);
console.log(arr);

function createArray (min, max) {
    
    const arr = [];
    for(let i=0; i<20; i++) {

        const number = Math.round( (Math.random() * (max - min)) + min);
        arr.push(number);
    }
    return arr;
}

const largest = getLargest(arr);
console.log('Przesortowana tablica zawierająca 10 największych liczb' , largest);

function getLargest(arr) {
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr.slice(0,10);
}


const avg = getAvg(largest);
console.log('Średnia arytmetyczna 10 największych liczb: ' , avg);

function getAvg(arr) {
    if(arr.length === 0) {
        return 0;
    }

    const avg = (arr.reduce( function(a,b) {
        return a + b;
    }, 0)/arr.length );
    return avg;
}

getLargest(createArray(1,20));

