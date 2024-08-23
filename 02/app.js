
/* rozwiązanie z pętlą for */
const x = prompt("Podaj liczbę!")
for(let i = 1; i < 10; i++) {
    console.log(x + '*' + i +  '=' + x * i)
}

/* rozwiązanie z pętlą while  */


function exponentiation() {
    const a = parseFloat(prompt('podaj podstawę potęgi!'))
    const n = parseFloat(prompt('podaj wykładnik potęgi!'))

    if(isNaN(a) || isNaN(n)) {
        console.log('wrong input format')
        return;
    }
    let counter = 1
    let output = ''
    while(counter <= n) {
        if(counter == 1) {
            output += a
        } else if(counter > 1 && counter !== n){
            output += '*' + a
        } else {
            output += '*' + a + '=' + a**n
        }
        counter++
    }
    console.log(output)
}

exponentiation()