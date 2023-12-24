const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);







function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}
/* Funkcja o nazwie getSum */
function getSum (par1, par2, par3) {
    const numbers = [parseInt(par1, 10), parseInt(par2, 10), parseInt(par3, 10)];
    numbers.sort(function(a, b) {
        return b - a;
    });
    const sum = numbers[0] + numbers[1];
    console.log(sum);
    return sum;

}

/* Funkcja o nazwie isEven */

const isEven = function(num) {
    if (isNaN(num)) {
        return null;
    } else {
        return num % 2 === 0;
    }
};

console.log(isEven(5));





