const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(par1, par2, par3) {
    const changeNumbers = [];
    changeNumbers.push(par1, par2, par3)
    const changedNumbers = changeNumbers.map(changeToInt);

    function changeToInt(num) {
        return parseInt(num);
    }
    const sortChangedNumbers = changedNumbers.sort(function (a, b) {
        return b - a;
    });

    const leftNumbers = sortChangedNumbers.slice(0, 2);


    const sumNumbers = leftNumbers.reduce(function (el, d) {
        return el + d;
    }, 0);
    return sumNumbers;

}
const sumAbc = getSum(a, b, c);
console.log(sumAbc);



const isEven = function (num) {
    const typeNum = 2;
    if (typeof num !== typeof typeNum) {
        return null;
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const even = isEven(sumAbc);
console.log(even);


function showInfo(ab, abc) {
    // switch (abc) {
    switch (abc(ab)) {
        case null:
            console.log(`Podany argument ${ab} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${ab} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${ab} jest nieparzysty`);
            break;
    }
}
// const finalInfo = showInfo(30, isEven);
// const finalInfo1 = showInfo(29, isEven);
// const finalInfo2 = showInfo("abc", isEven);


showInfo(sumAbc, isEven)
// showInfo(sumAbc, even)