
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!')

for(let i = 1; i <= 9; i++) {
    let result = x * i;
    console.log(`${x} * ${i} = ${result}`)
}


/* rozwiązanie z pętlą while  */
const a = prompt("Podaj podstawe")
const n = prompt("Podaj pwykładnik")

let result = 1
let i = 0;
let tab = []

while(i < n) {
    result *= a
    tab.push(a)
    i++
}

console.log(`${tab.join(' * ')} = ${result}`);