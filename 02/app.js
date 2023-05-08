// /* rozwiązanie z pętlą for */
const x = parseInt(prompt('podaj liczbę do mnożenia'))
for (let i = 1; i < 10; i++) {
	const element = x * i
	if (x < 1 && x >= 10) {
		console.log('nie poprawna liczba')
	} else {
		console.log(`${x} x ${i} =${element}`)
	}
}
console.log('------')
/* rozwiązanie z pętlą while  */
const a = parseInt(prompt('podaj podstawę potęgi'))
const n = parseInt(prompt('podaj wykładnik potęgi'))
let j = 1
let space = ``

if (isNaN(Number(a)) || isNaN(Number(n))) {
	console.log('Podano błędnie liczby')
} else {
	while (j < n) {
		space = space + ` * ${a}`
		j++
	}
	console.log(`${a}${space} = ${Math.pow(a, n)}`)
}
