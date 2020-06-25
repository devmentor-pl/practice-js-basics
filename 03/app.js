const min = 1;
const max = 100;

// const a = randomNumber(min, max);
// const b = randomNumber(min, max);
// const c = randomNumber(min, max);

// console.log(a, b, c);



// function randomNumber(min, max) {
//     return Math.round((Math.ra   ndom() * max - min) + min);
// }



const getSum = function (a, b, c) {
    let result;

    const aInt = parseInt(a);
    const bInt = parseInt(b);
    const cInt = parseInt(c);



    if (aInt > bInt && aInt > cInt) {
        if (bInt > cInt) {
            result = aInt + bInt;
        } else {
            result = aInt + cInt;
        }

    } else {
        if (bInt > cInt) {
            // b jest najwieksze
            if (aInt > cInt) {
                result = bInt + aInt;
            } else {
                result = bInt + cInt;
            }
        } else {
            // c jest najwieksze
            if (cInt > aInt) {
                result = cInt + bInt;
            } else {
                result = cInt + aInt;
            }

        }

    }



    console.log(`wynik działania dwóch największych liczb to: ${result}`);

    return result;

}

const res = getSum(20, 30, 100);
console.log(res);




function isEven(x) {
    if (typeof (x) === "number" && x % 2 === 0) {
        console.log(`${x} jest typem number i jest parzysta`)
        return true;
    } else if (typeof (x) === "number" && x % 2 !== 0) {
        console.log(`${x} jest typem number ale nie jest parzysta`)
        return false;
    } else {
        console.log(`${x} jest null`)
        return null;
    }

}
const even = isEven(res);
console.log(even);




const showInfo = function (k, l) {

    switch (l) {
        case null:
            console.log(`${k} jest  null`)
            break;
        case true:
            console.log(`${k} jest  true`)
            break;
        case false:
            console.log(`${k} jest false`)
            break;


        default:
            console.log('podano błędne dane');
            break;

    }

}

showInfo(res, even);