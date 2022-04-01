const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

console.log('----- getSum -----')
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

const sum = getSum(a, b, c)
console.log(sum)


console.log('----- isEven -----')
const isEven = function isEven(param) {
    console.log(typeof param)
    if(typeof param !== 'number') return null
    const result = param % 2 === 0 ? true : false
    return result
}
const test1 = 'Ala'
let result = isEven(test1)
console.log(test1, 'result:', result)

const test2 = false
result = isEven(test2)
console.log(test2, 'result:', result)

const test3 = []
result = isEven(test3)
console.log(test3, 'result:', result)

const test4 = 10
result = isEven(test4)
console.log(test4, 'result:', result)

const test5 = 11
result = isEven(test5)
console.log(test5, 'result:', result)

result = isEven(a)
console.log('a='+a, 'result:', result)

result = isEven(b)
console.log('b='+b, 'result:', result)

result = isEven(c)
console.log('c='+c, 'result:', result)

const even = isEven(sum)
console.log('sum='+sum, 'even:', even)


console.log('----- showInfo -----')
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

showInfo(sum, even)

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}