
/* rozwiązanie z pętlą for */
// const x = Number(prompt('Podaj liczbę!'));
// if(x >= 1 && x <= 9){
//     for(let i = 1; i < 10; i++){
//         const res = x * i;
//         console.log(x + " * " + i + " = " +res); 
//     }
// }
// else{
//     console.log("Przekroczyłeś przedział! ");
// }



/* rozwiązanie z pętlą while  */

const a = Number(prompt("Wpisz podstawę: "));
const n = Number(prompt("Wpisz wykładnik: "));

let i = 0;
let result = 1;
let info = "";

if(a > 0 && n >= 0){

    if(n === 0){
        console.log("Każda liczba do potęgi 0 daje 1");
    }
    else{
        while(i < n){
            result = result * a;
        
            if(i === n - 1){           
                info += a + " = " + result;        
            }else{
                info += a + " * ";
            }
            i++;
        }
        console.log(info)
    }
}
else{
    console.error("Podałeś błędne liczby")
}
