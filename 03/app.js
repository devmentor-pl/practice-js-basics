const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(first, second, third) {
    const a = parseInt(first)
    const b = parseInt(second)
    const c = parseInt(third)
    let tab = []
    tab.push(a,b,c)

    let sortTab = tab.sort(function(a, b){return a - b});

    let firstMax = tab[tab.length - 1]
    let secondMax = tab[tab.length - 2]

    return firstMax + secondMax
}

function isEven(num) {
    if(typeof num !== 'number') return false

    const result = num % 2 == 0 ? true : false
    return result
}

function showInfo(number, status) {
    console.log(status);
    switch (status) {
        case null:
            console.log(`Podany argument ${number} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${number} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${number} jest nieparzysty`);
            break;

        default:
            break;
    }
}

const sum = getSum(a, b, c)
const even = isEven(sum);

showInfo(sum, even);

// console.log(sum, even)

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}