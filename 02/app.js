
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!')

if (x > 0 && x <= 9) {
    for (let i = 1; i <= 9; i++) {
        const result = x * i
        console.log(x + ' * ' + i + ' = ' + result)
    }
} else if (x < 0 || x > 9) {
    console.error('Liczba którą podałeś jest poza zakresem 1-9')
} else {
    console.error('Wartość którą podałeś nie jest liczbą')
}


/* rozwiązanie z pętlą while  */
const a = Number(prompt('Podaj liczbę z przedziału 1-100'))
const n = Number(prompt('Podaj liczbę z przedziału 0-10'))

if (a > 1 && a < 100 && n >= 0 && n < 10) {

    if (n === 0) {
        console.log('Gdy n=0 to wynik zawsze jest równy 1')
    } else {
        let i = 0
        let result = 1
        let info = ''
        while (i < n) {
            result = result * a
            if (i > 0) {
                info = info + ' * '
            }

            info = info + a
            i++
        }

        console.log(info + ' = ' + result)
    }

} else {
    alert('Podałeś złe dane!')
}
