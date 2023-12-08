const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof (a))
console.log(typeof (b))

const sum = Number(a) + Number(b)
console.log(sum)
if (sum === Number(a) + Number(b)) {
    console.log('true')
}
else {
    sum = Number(a) + Number(b)
}

const subtract = Number(a) - Number(b)
console.log(subtract)
if (subtract === Number(a) - Number(b)) {
    console.log('true')
}
else {
    sum = Number(a) - Number(b)
}

const multiply = Number(a) * Number(b)
console.log(multiply)
if (multiply === Number(a) * Number(b)) {
    console.log('true')
}
else {
    sum = Number(a) * Number(b)
}

const divide = Number(a) / Number(b)
console.log(divide)
if (divide === Number(a) / Number(b)) {
    console.log('true')
}
else {
    sum = Number(a) / Number(b)
}

if (sum > 20) {
    console.log('sum' + ' jest większe od 20')
}
else {
    console.log('sum' + ' jest mniejsze lub równe 20')
}

if (subtract > 20) {
    console.log('subtract' + ' jest większe od 20')
}
else {
    console.log('subtract' + ' jest mniejsze lub równe 20')
}

if (multiply > 20) {
    console.log('multiply' + ' jest większe od 20')
}
else {
    console.log('multiply' + ' jest mniejsze lub równe 20')
}

if (divide > 20) {
    console.log('divide' + ' jest większe od 20')
}
else {
    console.log('divide' + ' jest mniejsze lub równe 20')
}