/* rozwiązanie z pętlą for */


// const multiplication = function () {
//     const x = 4;
//     for (let i = 1; i <= 9; i++) {
//         let result = x * i;
//         console.log(`${x}  *  ${i}  =  ${result} - for`)
//     }
// }

// multiplication()

/* rozwiązanie z pętlą while to samo zadanie */

const multiplication2 = function (x) {
    // const x = 4;
    let i = 1;
    while (i <= 9) {
        let result = x * i;
        console.log(`${x}  *  ${i}  =  ${result} - while`)
        i++;
    }
}

multiplication2(4);


//*petla while / drugie zadanie/ // *




const exponentiation = function (a, n) {

    //let a = 3; //podstawa
    //let n = 4; //wykladnik

    let iter = 0;
    let result = 1;
    let str = '';
    while (iter < n) {
        iter++;
        result = result * a;
        if (str === '') {
            str = a;
        } else {
            str += '*' + a;
        }

    }
    console.log(`${str} = ${result}`)
}

exponentiation(3, 4)