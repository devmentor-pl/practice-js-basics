// const min = 1;
// const max = 100;

// const a = randomNumber(min, max);
// const b = randomNumber(min, max);
// const c = randomNumber(min, max);

// console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}


function getSum(a, b, c) {
    const arr = [Math.round(a), Math.round(b), Math.round(c)];
    arr.sort(function (a, b) {
        return b - a;
    });

    return arr[0] + arr[1];
}
getSum(4.1, 5.1, 3.2);

// const aInt = Math.round(a);
    // const bInt = Math.round(b);
    // const cInt = Math.round(c);

    // //wybierz 2 najwieksze
    // let max1,max2;
    // if(aInt > bInt) {
    //     max1 = aInt;
    //     if(bInt > cInt) {
    //         max2 = bInt;
    //     } else {
    //         max2 = cInt;
    //     }
    // } else {
    //     max1 = bInt;
    //     if(aInt > cInt) {
    //         max2 = aInt;
    //     } else {
    //         max2 = cInt;
    //     }
    // }

    // console.log(max1, max2);


const isEven = function (num) {
    if (typeof num !== 'number') {
        return null;
    } else {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

function showInfo(a, b) {
    switch (b) {
        case null:
            console.log('Podany argument ' + a + ' nie jest liczbą');
            break;
        case false:
            console.log('Podany argument ' + a + ' jest nie parzysty');
            break;
        case true:
            console.log('Podany argument ' + a + ' jest parzysty');
            break;
    }
}

const a = 45;
const b = 25;
const c = 14;

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);