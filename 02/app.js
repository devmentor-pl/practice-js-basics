/* rozwiązanie z pętlą for */
const x = prompt('Enter your number');

function multTable(num) {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	if (!nums.includes(Number(num))) throw Error('Input must be between 1-9');
	for (let i = 1; i < 10; i++) {
		console.log(num * i);
	}
}
multTable(x);

/* rozwiązanie z pętlą while  */
