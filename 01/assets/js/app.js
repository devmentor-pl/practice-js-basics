const a = '4.2';
const b = 9;

console.log(a, b);

console.log('typ a:')
console.log(typeof a)

console.log('typ b:')
console.log(typeof b)

const numInt = parseFloat(a)
console.log(numInt)


const res1 = a + b
const res2 = a - b
const res3 = a * b
const res4 = a / b
const res5 = a % b

let res6 = a; res6++
let res7 = b; res7--

console.log (
    res1, res2, res3, res4, res5, res6, res7
)

if(res1 > 20) {
    console.log('res1 większe od 20')
} else {
    console.log('res1 mniejsze od 20')
}

if(res2 > 20) {
    console.log('res2 większe od 20')
} else {
    console.log('res2 mniejsze od 20')
}

if(res3 > 20) {
    console.log('res3 większe od 20')
} else {
    console.log('res3 mniejsze od 20')
}

if(res4 > 20) {
    console.log('res4 większe od 20')
} else {
    console.log('res4 mniejsze od 20')
}

if(res5 > 20) {
    console.log('res5 większe od 20')
} else {
    console.log('res5 mniejsze od 20')
}

if(res6 > 20) {
    console.log('res6 większe od 20')
} else {
    console.log('res6 mniejsze od 20')
}

if(res7 > 20) {
    console.log('res7 większe od 20')
} else {
    console.log('res7 mniejsze od 20')
}

