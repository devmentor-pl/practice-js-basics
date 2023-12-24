const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);







function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum (par1, par2, par3) {
    var numbers = [parseInt(par1, 10), parseInt(par2, 10), parseInt(par3, 10)];
    numbers.sort(function(a, b) {
        return b - a;
    });
    var sum = numbers[0] + numbers[1];
    console.log(sum);
    return sum;

}


