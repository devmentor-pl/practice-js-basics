const x = 4;

/* rozwiązanie z pętlą for */

console.log(`For:`);
multiplyUsingFor(x);

function multiplyUsingFor(number) {

    for (let i = 1; i < 10; i++) {
        console.log(`${i} x ${number} = ${i * number}`);
    }

}

/* rozwiązanie z pętlą while  */

console.log(`While:`);
multiplyUsingWhile(x);

function multiplyUsingWhile(number) {

    let i = 1;

    while (i < 10) {
        console.log(`${i} x ${number} = ${i * number}`);
        i++;
    }

}