
/* rozwiązanie z pętlą for */
const x = Number(prompt('Podaj liczbę!'))

if (x >= 1 && x < 10) {
    for (let i = 1; i <= 9; i++) {
        result1 = x * i
        console.log(i + ' x ' + x + ' = ' + result1)
    }
} else {
    console.log('Liczba musi być z przedziału od 1 do 9!')
}


/* rozwiązanie z pętlą while  */

const a = Number(prompt('Podaj liczbę A od 1 do 100'))
const n = Number(prompt('Podaj liczbę N od 0 do 10'))

if (a > 1 && a < 100 && n >= 0 && n <= 10) {
    if (n === 0) {
        console.log('Jeśli n to 0. Wynikiem zawsze będzie 1!')
    } else {
        let iteration = 0
        let result2 = 1
        let info = ''
        while (iteration < n) {
            result2 = result2 * a
            if (iteration !== 0) {
                info = info + ' * '
            }

            info = info + a

            iteration++
        }

        info = info + ' = ' + result2
        console.log(result2)
        console.log(info)
    }
} else {
    console.log('Podane dane są nieprawidłowe!')
}

