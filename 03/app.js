const min = 1;
const max = 100;

// const a = randomNumber(min, max);
// const b = randomNumber(min, max);
// const c = randomNumber(min, max);

// console.log(a, b, c);

const isEven = checkEven;//nie czaję, czy to tak powinno być. Kiedy od razu przypisywałam funkcję anonimową,
//to musiała być wyżej (chyba) i to (chyba) zaśmiecało kod

const a = 4;
const b = 25;
const c = 14;

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);

function showInfo(anything, boolValue) {
    switch(boolValue) {
        case null:
            console.log(`Podany argument \'${anything}\' nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument \'${anything}\' jest parzysty`);
            break;
        case false:
            console.log(`Podany argument \'${anything}\' jest nieparzysty`);
            break;
        default:
            console.log(`Hej, coś tu mnie próbujesz oszukać :<`);
            break;
    }
}

function checkEven(value) {
    if(typeof(value) !== 'number') return null;
    return value % 2 === 0;
}

function getSum(a, b, c) {
    const biggest = getTwoBiggest(a, b, c);
    let x = biggest[0];
    let y = biggest[1];
    
    // console.log(`${x} + ${y} = ${x + y}`);
    return x + y;
}

function getTwoBiggest(a, b, c) {
    const result = [];
    if(a < b) {
        result.push(b);
        if(a < c) { result.push(c); }
        else { result.push(a); } 
    }
    else {
        result.push(a);
        if(b < c) { result.push(c); }
        else {result.push(b); }
    }
    return result;
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}