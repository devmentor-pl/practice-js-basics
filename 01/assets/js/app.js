const a = '4.2'
const b = 9
console.log(a, b)

function checkType(param) {
    console.log(typeof param)
}
checkType(a)
checkType(b)


// 2nd part

const operators = ['+', '-', '/', '*']

operators.forEach(function (operator) {
    const value = calc(a, b, operator)
    console.log(`${a} ${operator} ${b} = `, calc(a, b, operator))
    checkValue(value)
})

function calc(a, b, operator) {
    switch (operator) {
        case '+':
            return +a + +b
        case '-':
            return a - b
        case '/':
            return a / b
        case '*':
            return a * b
        default:
            break
    }
}

function checkValue(value) {
    return value > 20 ? console.log('Wynik jest większy od 20: ', value) : console.log('Wynik jest mniejszy od 20: ', value)
}
