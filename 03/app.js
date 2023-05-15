const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const sum = getSumTwoNumbers(a, b, c)

console.log(a, b, c);
// console.log(sum)

const isEven = function (x) {
    if (isNaN(x)) return null
    else if (x % 2) return false
    else return true
}

const even = isEven(sum)
// console.log(even)

showInfo(sum, even)

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSumTwoNumbers(x, y, z) {
    // if (x > y && y > z) return x + y
    // else if (x > y && z > y) return x + z
    // else return y + z
    const sortArray = [x, y, z].sort((a, b) => { return b - a })
    return sortArray[0] + sortArray[1]


}

function showInfo(x, boolean) {
    switch (boolean) {
        case true:
            console.log('Podany argument ' + x + ' jest parzysty')
            break
        case false:
            console.log('Podany argument ' + x + ' jest nieparzysty')
            break;
        default:
            console.log('Podany argument ' + x + ' nie jest liczbą')
    }
}

