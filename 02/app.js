/* rozwiązanie z pętlą for */
// const x = 4;
// const number = parseInt(prompt('Podaj liczbę z przedziału od 1 do 9'));
// if (number <= 9 && number >= 1 && number !== NaN) {
// 	for (let i = 1; i <= number; i++) {
// 		console.log(`${i} x ${number} = ${i * number}`);
// 	}
// } else {
// 	alert('Podania liczba nie jest z przedziału od 0 do 9!');
// }

/* rozwiązanie z pętlą while  */

const a = prompt('Podaj podstawę potęgowania z przedziału od 1 do 9');
const n = prompt('Podaj wykładnik potęgowania z przedziału od 1 do 9');
let counter = 0;
let result = 0;
let finalResult = '';

while (counter < n) {
	counter++;
	if (counter < n) {
		finalResult += `${a} * `;
	} else {
		finalResult += `${a} =`;
		result = a ** n;
	}
}

console.log(finalResult, result);