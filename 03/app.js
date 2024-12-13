function getSum(a, b, c) {
    const aInt = parseInt(a);
    const bInt = parseInt(b);
    const cInt = parseInt(c);

    const arr = [aInt, bInt, cInt];
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr[0] + arr[1];
}

function isEven(num) {
    if (typeof num !== 'number') {
        return null;
    }
    return num % 2 === 0;
}

console.log(isEven(2), isEven(1), isEven('r'));

function showInfo(value, isEven) {
    switch (isEven) {
        case null:
            console.log(`${value} nie jest liczbą`);

            break;
        case true:
            console.log(`Liczba ${value} jest parzysta`);

            break;
        case false:
            console.log(`Liczba ${value} jest nieparzysta`);
            break;
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}