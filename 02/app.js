
/* rozwiązanie z pętlą for */
const x = prompt("Podaj liczbę!")
if (x !== null && x.trim() !== '' && !isNaN(x)) {
    const numberVal = Number(x)
    for (let i = 1; i <= 9; i++) {
        console.log(`${i} * ${numberVal}`, i * numberVal)
    }
} else {
    console.log("You provided something which is not a number!")
}


/* rozwiązanie z pętlą while  */
const a = prompt("Podaj podstawę potęgi!")
const n = prompt("Podaj wykładnik potęgi!")
let i = 1
let createCalcString = ''
let result = false
while (
    (i <= Number(n) || (i - 1 === Number(n) && Number(n) === 0))
    &&
    (a !== null && a.trim() !== '' && !isNaN(a))
    &&
    (n !== null && n.trim() !== '' && !isNaN(n))
) {
    const numberVal = Number(a)
    const expVal = Number(n)

    if (i < expVal) {
        createCalcString = createCalcString + `${numberVal} * `
    } else if (expVal === 0) {
        createCalcString = createCalcString + numberVal + ' ^ 0'
        result = Math.pow(numberVal, expVal)
    }
    else {
        createCalcString = createCalcString + numberVal
        result = Math.pow(numberVal, expVal)
    }
    i++
}

if (!result && result !== 0) {
    console.log('Something went wrong!')
} else {
    console.log(`${createCalcString} = ${result}`)
}