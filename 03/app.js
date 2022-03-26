const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const isEven = function (x) {

    if (typeof x != "number") {
        return null;
    } else if (x % 2 === 0) {
        return true;
    } else return false;
};


const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);



function getSum(x, y, z) {

    let numbers = [parseInt(x), parseInt(y), parseInt(z)];
    let lowest = Math.min.apply(Math, numbers);

    const initial = 0;
    const result = numbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initial) - lowest;

    console.log(`Suma dwóch największych liczb wynosi ${result}`);
    return result;
}


function showInfo(number, prm) {

    switch (prm) {
        case null:
            console.log(`Podany argument ${number} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${number} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${number} jest nieparzysty`);
            break;
    }

}


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}