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

    const array = [parseInt(a), parseInt(b), parseInt(c)];
    const sortedArray = array.sort((a ,b) => b - a);
    const arrayWith2Elements = sortedArray.slice(0, 2);
    const sum = arrayWith2Elements.reduce((acc, el) => acc + el, 0);
    return sum;
    
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