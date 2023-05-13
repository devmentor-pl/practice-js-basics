
/* rozwiązanie z pętlą for */

const getNumberFromUser = function () {
    let x = prompt('Podaj liczbę od 1 do 9')
    if (x === null || x.trim() === '') return
    else if (isNaN(x)) {
        alert('To nie jest liczba!');

        return getNumberFromUser()
    }
    else if (x < 1 || x > 9) {
        alert("Nieprawidłowy zakres. Wprowadź liczbę od 1 do 9")

        return getNumberFromUser()
    }

    return x
}

const number = getNumberFromUser()

const countMultiplication = function (number) {
    if (typeof number === "undefined") return

    for (let i = 1; i <= 9; i++) {
        console.log(number * i)
    }
}

countMultiplication(number)



/* rozwiązanie z pętlą while  */

const getBaseNumberFromUser = function () {
    const input = prompt("Wprowadź liczbę, która będzie podstawą w potęgowaniu");
    if (input === null ) return

    const number = Number(input)

    if (isNaN(number) || input.trim() === '') {
        alert('To nie jest liczba!')
        return getBaseNumberFromUser()
    }

    return number
}

const getExponentNumberFromUser = function () {
    const input = prompt("Wprowadź liczbę, która będzie wykładnikiem");
    if (input === null) return

    const number = Number(input)

    if (isNaN(number) || input.trim() === '') {
        alert('To nie jest liczba!')
        return getExponentNumberFromUser()
    } else if (number < 0) {
        alert('Wprowadź liczbę większą od 0.')
        return getExponentNumberFromUser()
    }

    return number
}

const countPowerNumber = function (x, y) {
    if (typeof x === "undefined" || typeof y === "undefined") {
        return "Brak podanych danych"
    }
    else {
        let counter = 0;
        let result = 1;

        while (counter < y) {
            result *= x
            counter++
        }
        alert("Wynik to: " + result)

        return result
    }
}

const a = getBaseNumberFromUser()
const n = getExponentNumberFromUser()

const result = countPowerNumber(a, n)
console.log(result)
