const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const result = getSum(a,b,c);
console.log(result);




function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}
function getSum(x,y,z) {
    const intX=parseInt(x);
    const intY=parseInt(y);
    const intZ=parseInt(z);
    const arr=[intX, intZ, intY];
    arr.sort(function(a,b){
        return a-b;
    })
    console.log(arr)
    return arr[1]+arr[2];
}
const isEven = function(number) {

    if (typeof number !== 'number') {
        return null;
    }
    
    return number % 2 === 0;
};
function showInfo(value, itResult) {
    switch (itResult) {
    
            case null:
                console.log("Podany argument " + value + " nie jest liczbą");
                break;
            case true:
                console.log("Podany argument " + value + " jest parzysty");
                break;
            case false:
                console.log("Podany argument " + value + " jest nieparzysty");
                break;
    }
}
const itResult = isEven(result);

showInfo(result, itResult);