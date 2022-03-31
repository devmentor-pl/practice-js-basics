
/* rozwiązanie z pętlą for */
console.log('---- for multiplication ----')
// const x = 4;
const x = parseInt(prompt('Multiplication, Podaj liczbę (1-9): ', 1))

if (x > 0 && x < 10) {
    for (let i = 1; i <= 9; i++) {
        console.log(i + ' x ' + x + ' = ' + i * x)
    }
} else {
    console.log('The number must by between 1 - 9')
}



/* rozwiązanie z pętlą while  */
console.log('---- while exponentiation ----')
// let a = 3
const a = parseInt(prompt('Exponentiation, Podaj podstawę - wykładnik (1-10): ', 1))
if (a > 0 && a < 11) {
    // let n = 4
    const n = parseInt(prompt('Exponentiation, Podaj liczbę - wykładnik (1-10): ', 1))

    if (n > 0 && n < 11) {
        const result = Math.pow(a, n)
        console.log(a + '^' + n + '=' + result)

        let j = 1
        let power = ''
        let powerResult = 1
        while (j <= n) {
            if (j === 1) {
                power = a
            } else {
                power += ' * ' + a
            }
            powerResult *= a
            j++
        }
        console.log(power + ' = ' + powerResult)
    } else {
        console.log('The number of exponent - must by between 1 - 10')
    }
} else {
    console.log('The number of base - must by between 1 - 10')
}









