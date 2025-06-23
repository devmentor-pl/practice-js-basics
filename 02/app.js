
/* rozwiązanie z pętlą for */


/* Pierwsza próba: 

let number = prompt("Podaj liczbę o 1 do 9")

if(10 > number > 0) {
console.log('Liczba jest poprawna');
} else if(number > 10) {

console.log('Podaj miniejszą');
} else if(number < 0){
console.log('Podaj większą od 0')
}


for(let i=1, i<=9, i++) {

}

*/

let number = parseInt(prompt("Tabliczka możenia (for): Podaj liczbę cyfrę od 1 do 9:")); // Zgodnie z prezentacją dane od użytowinka pobierane prompt są zawsze jako string - zamieniamy je przed z parseInt()

if (!isNaN(number) && number >= 1 && number <= 9) { // sprawdzam czy number to liczba "nie txt", czy number jest >= oraz <= 9 
    console.log(`Tabliczka mnożenie dla liczby ${number}:`); // komentarz dla mnie :) zmienne teksowe wpisujemy w nawiasy tylda - ``, odwołanie do zmiennych ${x}

    for (let i=1; i <=9; i++) { 
        console.log(`${number} * ${i} = ${number * i}`); 
    }
} else {
    console.log("Podaj cyfrę od 1 do 9!")
}3

/* rozwiązanie z pętlą while  */

let numberWhile;

// działa do czasu podania cyfry 

while (true){ 
    numberWhile = parseInt(prompt("Tabliczka możenia (while1): Podaj liczbę cyfrę od 1 do 9:"));

    if (!isNaN(numberWhile) && numberWhile >= 1 && numberWhile <= 9) { 
        break; 
    }

    alert("Podaj cyfrę od 1 do 9!");
}

console.log(`Tabliczka mnożenie dla liczby ${numberWhile}:`);

let i = 1;

// druga pętla rozpisuje działania jak for

while(i <=9) { 
    console.log(`${numberWhile} * ${i} = ${numberWhile * i}`);
    i++;
}