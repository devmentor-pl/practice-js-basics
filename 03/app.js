const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);


function getSum(a, b, c) {
    
    a = a ?? 0;
    b = b ?? 0;
    c = c ?? 0;

    let biggest = Math.max(a, b, c);
    

    if(a === biggest) {
        a = -Infinity;
    } else if (b === biggest) {
        b = -Infinity;
    } else {
        c = -Infinity;
    }

    let secondBiggest = Math.max(a, b, c);

    console.log(biggest, secondBiggest);    

    return biggest + secondBiggest;

}

const sum = getSum(a, b, c);
console.log("Suma dwóch największych liczb =", sum);


// funkcja o nazwie "isEven"

const checkout = function(a, b, c) {

    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" ) {
        return null
    } else {
        if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) { 
            return true
        } else {
            return false
        }
    }
}




















function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}