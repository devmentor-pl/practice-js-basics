
/* rozwiązanie z pętlą for */
// const x = 4;
// const x = Number(prompt('Podaj liczbę!'))


// if (x >= 1 && x <11) {

//     for (i=1; i<=10; i++){
//     let result = x * i
//     console.log(x + " * " + i + " = " + result)
//     }
// } else {
//     console.error('Podaj liczbę od 1 do 10')
// }



/* rozwiązanie z pętlą while  */

const a = Number(prompt('Podaj a z przedziału od 1 do 100'))
const n = Number(prompt('Podaj n z przedziału od 0 do 10'))

if (a >= 1 && a <= 100 && n >= 0 && n <= 10) {
    if (n === 0) {
        console.log('liczba do potęgi n=0 zawsze jest równa 1')
    } else {

        let i = 0
        let result = 1
        let info = " "

        while (i < n) {

            result = result * a

            if (i > 0) {

                info = info + " * "
            }

            info = info + a
            i++
        }

        info = info + " = " + result

        console.log(result)
        console.log(info)
    }
} else {
    console.error("Podałeś błędne dane")
}