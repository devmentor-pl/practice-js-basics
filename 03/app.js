const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c)

const getSum = function (e, f, g) {
    let eInt = parseInt(e)
    let fInt = parseInt(f)
    let gInt = parseInt(g)

    const arr = [eInt, fInt, gInt];
    arr.sort(function (a, b) {
        return b - a;
    });

    return arr[0] + arr[1];


}

const sum1 = getSum(a, b, c);
// console.log(sum)


const isEven = function (num) {

    if (typeof num !== 'number') {

        return null;
    }

    return num % 2 === 0;

}

const showInfo = function (any, isEven) {
    switch (isEven) {
        case null:
            console.log('Podany argument ' + any + ' nie jest liczba');
            break;
        case true:
            console.log('Podany argument ' + any + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + any + ' jest nieparzysty');

    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}