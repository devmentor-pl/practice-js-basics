
/* rozwiązanie z pętlą for */
let x;
let result = 0;
const tabliczka = document.getElementById('tabliczka');


function generateTable() {    //robie z tego funkcje, zeby mozna było zmieniać cyfrę bez odświeżania
    tabliczka.innerHTML = ''; 
    for (let i = 1; i < 10; i++) {
        result = x * i;
        tabliczka.innerHTML += `${x} x ${i} = ${result}<br>`;
    }
}

function initialize (){
    do{
        x = parseFloat(prompt('Podaj liczbę od 1 do 9!'));
    }while (isNaN(x) || x < 1 || x > 9);

    generateTable();
}



const changeNumber = document.getElementById('changeNumber');
changeNumber.addEventListener('click', initialize);

/* rozwiązanie z pętlą while  */


const expo = document.getElementById('expo');

let a;
let n;
let j = 1;
let exoResult = 1;
let text = ""; 


function generateExpoTable() {
    expo.innerHTML = "";
    while (j <= n) {
        exoResult *= a;
        if (j > 1) { 
            text += ` x `;
        }
        text += a;
        j++;
    }
    expo.innerHTML = `${text} = ${exoResult}`;
};

function initializeExpo() {
    do{
        a = parseFloat(prompt('Podaj podstawę od 1 do 9!'));
    }while (isNaN(a) || a < 1 || a > 9);
    do{
        n = parseFloat(prompt('Podaj wykładnik od 1 do 9!'));
    }while (isNaN(n) || n < 1 || n > 9);

    generateExpoTable();
}

const changeExpo = document.getElementById('changeExpo');
changeExpo.addEventListener('click', initializeExpo);