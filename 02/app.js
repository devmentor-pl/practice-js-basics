/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!')

// if (x > 0 && x <= 9) {
// 	for (let i = 1; i <= 9; i++) {
// 		console.log(`${x} * ${i} = ${x * i}`)
// 	}
// } else {
// 	alert('podaj liczbę od 1 do 9')
// 	location.reload()
// }

/* rozwiązanie z pętlą while, ogólnie działa ale wyświetla o jeden znak mnożenia za dużo  */

function repeatStringNumTimes(num1, times) {
	let userNumber1 = prompt(`Podaj podstawę`, num1)
	let userNumber2 = prompt(`Podaj wykładnik`, times)
	let repeatedString = ''
	let result = userNumber1 ** userNumber2

	while (userNumber2 > 0) {
		repeatedString += userNumber1 + ' * '
		userNumber2--
	}

	console.log(`${repeatedString} = ${result}`)
}

repeatStringNumTimes()

/* rozwiązanie z if, niestety nie wiem dlaczego nie działa */

// function repeatStringNumTimes(num1, times) {
// 	const userNumber1 = prompt(`Podaj podstawę`, num1)
// 	const userNumber2 = prompt(`Podaj wykładnik`, times)

// 	let repeatedString = ''
// 	let result = userNumber1 ** userNumber2

// 	if (typeof userNumber1 === 'number' && typeof userNumber2 === 'number') {
// 		while (userNumber2 > 0) {
// 			repeatedString += userNumber1 + ' * '
// 			userNumber2--
// 		}

// 		console.log(`${repeatedString} = ${result}`)
// 	} else {
// 		location.reload()
// 	}
// }

// repeatStringNumTimes()
