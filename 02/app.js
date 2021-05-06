
/* rozwiązanie z pętlą for */


function getSum(numberFromUser, multiply, add) {

   const x = numberFromUser();

   for(let i=1; i<=9; i++) {

       const y = multiply(i , x);
       const z = add(i , x);

        const sum = i * x;

        console.log('Your' , i , 'multiply resault is:' , sum , 'because' , y , sum , '(' , z , sum , ')');

    }
}


getSum(getUserNumber, getMultiplySequence, getAddSequence);


function getAddSequence(a,b) {

    multiplySequence = "";
    i=1;

    while( i < b ) {
        multiplySequence += ( a + " + " );
        i++;

        if( i === b ) {
            multiplySequence += (a + " =" );
        }
      }
       return multiplySequence;
}


function getMultiplySequence(a,b) {

    multiplySequence = "";
    i=1;

    while( i < 2) {
        multiplySequence += ( a + "*" );
        i++;

        if( i === 2 ) {
            multiplySequence += (b + " =" );
        }
      }
       return multiplySequence;
}


function getUserNumber() {

    const num = parseInt( prompt("Enter a number from 1 to 9") );

    if(num > 0 && num < 10) {
        return num;

    } else {
        getUserNumber();
    }
}



/* rozwiązanie z pętlą while  */


function getPow(getNumberFromUser , pow) {

    const a = parseInt( getNumberFromUser('Enter a basis number') );
    const b = parseInt( getNumberFromUser('Enter a index') );
    const c = pow(a,b);

    const sum = Math.pow(a,b);
    console.log(c , sum);
    return sum;
}

getPow(getUserNumbers, getPowSequence);


function getPowSequence(a,n) {

    if( (a > 0 && a < 10) && (n > 0 && n < 10) ) {

        powSequence = ""
        i=1;

        while( i < n ) {
            powSequence += (a + "*" );
            i++;
         if( i === n) {
            powSequence += (a + " =" );
        }
      }
       return powSequence;

    } else {
        console.log('Podaj liczbę od 1 do 9');
    }
}


function getUserNumbers(message) {

     const x = prompt(message);
     return x;
}