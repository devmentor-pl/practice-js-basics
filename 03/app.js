const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}


function getSum(a, b, c) {
    const aInt = Math.round(a);
    const bInt = Math.round(b);
    const cInt = Math.round(c);

    //wybierz 2 najwieksze
    const small =;
    const large =;

    if(a < b)
}
getSum(1.1, 2.1, 3.2);