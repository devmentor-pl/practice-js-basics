/* rozwiązanie z pętlą for */

const x = 4;

for (let i = 1; i <= 9; i++) {
	const result = x * i;
	console.log(`${x} * ${i} = ${result}`);
}

const z = parseInt(prompt("Podaj liczbę:"));
for (let i = 1; i <= 9; i++) {
	const result = z * i;
	console.log(`${z} * ${i} = ${result}`);
	console.log(typeof z);
}

/* rozwiązanie z pętlą whil e  */

let x = 4;
let i = 1;

while (i <= 9) {
	const result = x * i;
	console.log(`${x} * ${i} = ${result}`);
	i++;
}

let num = parseInt(prompt("Podaj liczbę:"));
while (i <= 9) {
	const result = num * i;
	console.log(`${num} * ${i} = ${result}`);
	i++;
}
