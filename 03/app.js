const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    const sortedNum = [parseInt(a), parseInt(b), parseInt(c)].sort((a, b) => b - a)
    return sortedNum[0] + sortedNum[1]
}
const sum = getSum(a, b, c)

const isEven = function (a) {
    return typeof a !== "number" ? null : a % 2 === 0

}
function showInfo(a, b) {
    switch (b) {
        case null:
            console.log(`Podany argument ${a} nie jest liczbą`)
            break
        case true:
            console.log(`Podany argument ${a} jest liczbą parzystą`)
            break
        case false:
            console.log(`Podany argument ${a} jest liczbą nieparzystą`)
            break
        default:
            console.log(`Nie spełniono warunków weryfikacji`)
    }
}
showInfo(sum, isEven(sum))

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}