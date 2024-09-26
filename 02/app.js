/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbe!')

// if (x > 0 && x < 10) {
// 	for (let i = 1; i <= 10; i++) {
// 		console.log(x + 'x' + i + '=' + x * i)
// 	}
// } else {
// 	console.log('zła liczba')
// }

/* rozwiązanie z pętlą while  */
const number = prompt('podaj liczbę')
const n = prompt('podaj potęgę')
let counter = 0
let result = 1

if (isNaN(number) || isNaN(n)) {
	console.log('Podano nieprawidłowe dane. Wprowadź liczby.')
}

while (counter < n) {
	result *= number
	counter++
}

console.log(`${number}^${n} = ${result}`)
