const min = 1;
const max = 100;


const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const sum = getSum(a, b, c);
const even = isEven(sum);

console.log(a, b, c);



console.log(getSum(a, b, c));

console.log(isEven(sum));





function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) {
    let array = [a, b, c];
    array.sort(function (a, b) {
        return b - a;
    })

    let sorted = array.slice(0, 2);
    let sum = sorted.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum;

}
function isEven(int) {
    if (int % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
function showInfo(sum, even) {
    switch (even) {
        case null:
            console.log("Podany argument", + even, + 'nie jest liczbą');
        case truel:
            console.log("Podany argument", + even, + 'jest parzysty');
        case false:
            console.log("Podany argument", + even, + 'jest nieparzysty');
    }


}