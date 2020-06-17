const min = 1;
const max = 100;

// const a = randomNumber(min, max);
// const b = randomNumber(min, max);
// const c = randomNumber(min, max);

// console.log(a, b, c);







// function randomNumber(min, max) {
//     return Math.round((Math.random() * max - min) + min);
// }
let result;


const getSum = function (a, b, c) {
    const aInt = parseInt(a);
    const bInt = parseInt(b);
    const cInt = parseInt(c);

    if (a > b || a > c) {
        // console.log(aInt)
    }
    if (b > a || b > c) {
        // console.log(bInt)
    }
    if (c > a || c > b) {
        // console.log(cInt)
    }

    result = bInt + cInt;
    console.log(`wynik działania dwóch największych liczb to: ${result}`)

}

getSum(20, 30, 100)




function isEven(x) {
    if (typeof (x) === "number" && x % 2 === 0) {
        console.log(` ${x} jest typem number i jest parzysta`)
        return true;
    } else if (typeof (x) === "number" && x % 2 !== 0) {
        console.log(` ${x} jest typem number ale nie jest parzysta`)
        return false;
    } else {
        console.log(`${x} jest null`)
    }

}
isEven(result)




const showInfo = function (k, l) {
    switch (l) {
        case null:
            console.log(`${l} jest typem  null`)
            break;
        case true:
            console.log(`${l} jest typem  true`)
            break;
        case false:
            console.log(`${l} jest typem false`)
            break;


        default:
            console.log('podano błędne dane');
            break;

    }

}

showInfo(10, true)