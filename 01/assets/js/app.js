const a = '4.2';
const b = 9;

console.log('--- variables ---')
console.log(a, b)

// type of variables
console.log('--- typeof ---')
console.log('a type: ', typeof a)
console.log('b type: ', typeof b)

// operator
console.log('--- arithmetic operator ---')
const plus = Number(a) + b 
console.log(plus)
const minus = Number(a) - b 
console.log(minus)
const times = Number(a) * b 
console.log(times)
const devided = Number(a) / b 
console.log(devided)
const module = Number(a) % b 
console.log(module)

// greater than 20
console.log('--- greater than 20 ---')
if(plus > 20) {
    console.log('plus larger')
} else {
    console.log('smaller')
}
if(minus > 20) {
    console.log('minus larger')
} else {
    console.log('smaller')
}
if(times > 20) {
    console.log('times larger')
} else {
    console.log('smaller')
}
if(devided > 20) {
    console.log('devided larger')
} else {
    console.log('smaller')
}
if(module > 20) {
    console.log('module larger')
} else {
    console.log('smaller')
}


