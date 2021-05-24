
/* rozwiązanie z pętlą for */

const multiplication = function () {
    const x = 4;
    for (let i = 1; i <= 9; i++) {
        let result = x * i;
        console.log(`${x}  *  ${i}  =  ${result}`)
    }
}
multiplication()



/* rozwiązanie z pętlą while  */

const multiplication2 = function () {
    const x = 4;
    let i = 1;
    while (i <= 9) {
        let result = x * i;
        console.log(`${x}  *  ${i}  =  ${result}`)
        i++;
    }
}
multiplication2()

/* rozwiązanie z pętlą while dla prompt  */

const x = prompt('Podaj liczbę')
if (x >= 1 && x <= 9) {
    for (i = 0; i <= 9; i++) {
        const multiplication = x * i;
        console.log(multiplication);
    }
}
else {
    console.log("Źle! Proszę podać liczbę od 1 do 9")
}


/* rozwiązanie z pętlą while  */

const a = prompt('Podaj liczbę');
const n = prompt('Podaj liczbę');
const result = a ** n;
while (a > 0 && n > 0) {

console.log(result);
}




