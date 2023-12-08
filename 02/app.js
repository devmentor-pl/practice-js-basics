'use strict'
    /* rozwiązanie z pętlą for */

    ; (function getNumberFormUser() {
        const input = prompt('Type number 1-9!')
        const number = Number(input)
        if (Number.isNaN(number)) {
            return getNumberFormUser()
        }
        if (number < 1) {
            return getNumberFormUser()
        }
        if (number > 9) {
            return getNumberFormUser()
        }
        else {
            function createTable() {
                for (let j = 1; j < 10; j++) {
                    let result = number * j
                    console.log(number + ' x ' + j + ' = ' + result)
                }
            }
            return createTable()
        }
    })()

    /* rozwiązanie z pętlą while  */
console.log('second part')

    ; (function getNumberFormUser() {
        const input = prompt('Type number 1-9!')
        const x = Number(input)
        if (Number.isNaN(x)) {
            return getNumberFormUser()
        }
        if (x < 1) {
            return getNumberFormUser()
        }
        if (x > 9) {
            return getNumberFormUser()
        }
        else {
            const input2 = prompt('Type number 1-9!')
            let y = Number(input2)
            if (Number.isNaN(y)) {
                return getNumberFormUser()
            }
            if (y < 1) {
                return getNumberFormUser()
            }
            if (y > 9) {
                return getNumberFormUser()
            }
            else {
                let i = 0
                let result = 1
                let info = ''
                while (i < y) {
                    i++
                    result = result * x
                    if (i > 1) {
                        info = info + ' x '
                    }
                    info = info + x
                    if (i === y) {
                        info = info + ' = ' + result
                    }
                }
                console.log(info)
            }
        }
    })()