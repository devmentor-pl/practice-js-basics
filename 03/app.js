const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);


// getSum
// ------------------------------
console.log('----- getSum -----')
const sum = getSum(a, b, c)
console.log(sum)


// isEven
// ------------------------------
console.log('----- isEven -----')
const isEven = function isEven(param) {
    console.log('typeof param:', typeof param)
    if(typeof param !== 'number') return null
    const result = param % 2 === 0 ? true : false
    return result
}
const even = isEven(sum)
console.log('sum='+sum, 'even:', even)


// showInfo
// ------------------------------
console.log('----- showInfo -----')
showInfo(sum, even)


// functions
// ------------------------------
function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(x, y, z) {
    let a = parseInt(x)
    let b = parseInt(y)
    let c = parseInt(z)

    // bubble sort 
    const arr = [a, b, c]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr)

    // sum
    let sum = 0
    sum = arr[1] + arr[2]
    return sum
}

function showInfo(x, y) {
    console.log('First arg - sum: ', x)
    console.log('Second arg - even: ', y)
    let info
    switch(y) {
        case null:
            info = 'Podany argument '+y+' nie jest liczbą'
            break
        case true:
            info = 'Podany argument '+y+' jest parzysty'
            break
        case false:
            info = 'Podany argument '+y+' jest nieparzysty'
            break
        default:
            console.log('switch info default')
            break
    }
    console.log(info)
}