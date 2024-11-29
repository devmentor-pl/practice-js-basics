const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) {

    if (a > b && b > c){
        return parseInt(a) + parseInt(b);

    } else if (a > b && c > b){
        return parseInt(a) + parseInt(c);

    } else if (a < b && a < c){
        return parseInt(b) + parseInt(c);

    } else if (a < b && a >c){
        return parseInt(a) + parseInt(b);
    }
}


const isEven = function(number){

    if (typeof(number) !== 'number'){
        return null;
    }

    if(number%2 === 0){
        return true;
    } else {
        return false;
    }
}

function showInfo(value, boolean){

    switch(value, boolean){
        case null:
            console.log(`Podany argument ${value} nie jest liczbą`);
            break;

        case true:
            console.log(`Podany argument ${value} jest parzysty`);
            break;

        case false:
            console.log(`Podany argument ${value} jest nieparzysty`);
            break;
    }
}

const sum = getSum(a, b, c);
console.log(sum);

const isSumEven = isEven(sum);
console.log(isSumEven);

showInfo(sum, isSumEven);