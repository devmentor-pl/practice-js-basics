const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);
function getSum(x, y, z) {
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    const numbers = [x, y, z];
    numbers.sort (function (a,b){
        return b - a;
    })
    return numbers[0] + numbers[1]
}


const isEven = (num) => {
    if (typeof num !== 'number') {
        return null
    } else if (num % 2 === 0) {
        return true
    } else { return false }
}



function showInfo(type1, type2){
    switch (type2) {
        case null:
            console.log(`Podany argument ${type1} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${type1} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${type1} jest nieparzysty`);
            break;
    }
}
const sum = getSum(a, b, c);
console.log(`Suma 2 największych liczb spośród: ${a}, ${b} i ${c} to ${sum}`);
const even = isEven(sum);
showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}


