const a = 41.5234;
const b = 25;
const c = 14;

const sum = getSum(a, b, c);


function getSum(a, b, c) {
    let largestNum = Math.max(a, b, c);
    let secondLargestNum;

    if (largestNum === a) {
        secondLargestNum = Math.max(b, c);
    } else if (largestNum === b) {
        secondLargestNum = Math.max(a, c);
    } else {
        secondLargestNum = Math.max(a, b);
    }
    return sum1 = parseInt(largestNum) + parseInt(secondLargestNum);
}

const even = isEven(2);

function isEven(num) {
    if (typeof num !== "number") {
        return null;
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function showInfo(para1, para2) {
    switch (para2) {
        case null:
            console.log('Podany argument ' + para1 + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + para1 + ' jest parzystybą');
            break;
        case false:
            console.log('Podany argument ' + para1 + ' jest nieparzysty');
            break;
    }
}

showInfo(sum, even);