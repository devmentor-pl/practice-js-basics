/* rozwiązanie z pętlą for */
try {
    const x = prompt('Podaj liczbę');
    if (!(x * 1) && +x !== 0) { // nie wiedziałam jak sprawdzić czy podabna wartość jest liczbą 
        throw new Error('Podano błędnie liczbę');
    }
    for (let i = 1; i <= 9; i++) {
        console.log(`${i} x ${x} = ${i*x}`);
    }
} catch (e) {
    console.log(e.message);
}

/* rozwiązanie z pętlą while  */
try {
    const a = prompt('Podaj liczbę a - podstawę');
    const n = prompt('Podaj liczbę n - wykładnik');
    if ((!(a * 1) && +a !== 0) || (!(n * 1) && +n !== 0)) {
        throw new Error('Podano błędnie liczby');
    }
    if (+n === 0) {
        console.log('Każda liczba podniesiona do potęgi 0 wynosi 1')
    } else {
        let j = 1;
        let par = ``;
        while (j < n) {
            j++;
            par = par + ` * ${a}`;
        }
        console.log(`${a}${par} = ${Math.pow(a,n)}`);
    }
} catch (e) {
    console.log(e.message);
}