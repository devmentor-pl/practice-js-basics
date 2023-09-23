const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(one, two, three){
    const arr = [one, two, three].map(num => Math.floor(num));
    const getMinNum = Math.min(...arr);
    const getMaxArr = arr.filter(num => num !== getMinNum);
    const result = getMaxArr.reduce((a, b) => a + b, 0);
    return result;
}

function isEven(one) {
    if (typeof one !== 'number') return null;
    return one % 2 === 0 ? true : false;
}

function showInfo (one, two) {
    switch (two) {
    case null:
        console.log(`Podany argument ${one} nie jest liczbą.`);
        break;
    case true:
        console.log(`Podany argument ${one} jest parzysty.`);
        break;
    case false:
        console.log(`Podany argument ${one} jest nieparzysty.`);
        break;
    default:
        console.log(`Podano bledne dane. one: ${one}, two: ${two}`);
        break;
    }
}


const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);
