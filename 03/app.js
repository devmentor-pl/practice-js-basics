const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(x,y,z){
    const xInt = parseInt(x);
    const yInt = parseInt(y);
    const zInt = parseInt(z);

    const arr = [xInt, yInt, zInt];
    arr.sort();
    const highestValues = arr.slice(1);
    const result = highestValues.reduce((a,b)=> a+b);
    console.log(result)
    return result;
}

const isEven = function(param){
    if(typeof param != "number") return null;

    const checkParam = param %2 ===0 ? true:false;
    // console.log(checkParam);
    return checkParam;
}

function showInfo(p1, p2){
    switch (p2) {
        case null:
            console.log(`Podany argument ${p2} nie jest liczbą`)
            break;
        case true:
            console.log(`Podany argument ${p2} jest parzysty`)
            break;
        case false:
            console.log(`Podany argument ${p2} jest nieparzysty`)
            break;
        default:
            break;
    }
}





function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}
const sum = getSum(a,b,c);
const even = isEven(sum);
showInfo(sum, even);
