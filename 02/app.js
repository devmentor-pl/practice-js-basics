/* rozwiązanie z pętlą for */

// const x = prompt('Podaj liczbę!')
// const y = 9

// if (x >= 1 && x <= 9) {
// 	for (let i = 1; i <= y; i++) {
// 		const res = x * i
// 		console.log(`${x} x ${i} = ${res}`)
// 	}
// } else {
// 	alert('Podaj liczbę z zakresu od 1 do 9')
// }

/* rozwiązanie z pętlą while  */

const a = prompt('Podaj liczbę podstawy! (1 - 100)')
const n = prompt('Podaj liczbę wykładnika!(1 - 10) ')

if (a >= 1 && a <= 100 && n >= 1 && n <= 10) {
	let i = 1
	let result = 1
	let info = ''

	while (i <= n) {
		result *= a

		if (i < n) {
			info = info + a + ' * '
		} else {
			info = info + a + ' = '
		}
		i++
	}
	console.log(info + result)
} else {
	alert('Podano błędne liczby!')
}
