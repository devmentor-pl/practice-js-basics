const x = prompt('Podaj liczbę');
let result = 1;
if(x >= 1 && x <= 9) {
    for(let i=1; i<=9; i++) {
        result = i * x;
        console.log(`${i} * ${x} = ${result}`);
    }
}
else {
    alert('Podana wartość nie znajduje się w przedziale od 1 do 9');
}
