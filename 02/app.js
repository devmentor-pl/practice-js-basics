
/* rozwiązanie z pętlą for */

const x = parseInt (prompt("Podaj liczbę")); {
    if (x => 1 && x <=9) {
        for (let i = 1; i <= 9; i++) {
            let result = x * i;
            console.log(`${x}  *  ${i}  =  ${result}`)
    
    }
} else {
    console.log("Liczba musi mieścić się w przedziale od 1 do 9")
}
}



/* rozwiązanie z pętlą while  */

let result = 1;
let counter = 0;
while ( counter < 4) {
  result = result * 3;
  counter = counter + 1;
 
}
       console.log(result);

// rozwiązanie z prompt

const a = 3;
const n = prompt('Podaj wykładnik');
let result = 1;
let counter = 0;
while ( counter < n) {
  result = result * 3;
  counter= counter + 1;
 
}
       console.log(result);



