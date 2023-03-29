const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a,b,c){
    const nums = [a,b,c];
    nums.sort(function(a, b) {
        return b - a;
      });
    console.log(nums)
    return nums[0] + nums[1];
}

const isEven = function (number){
    if(typeof number !== 'number'){
        return null;
    }
    return number%2 === 0;
}

function showInfo(value, name){
    switch (name) {
        case null:
            console.log(`Podany argument ${value} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${value} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${value} jest nieparzysty`)
            break;
        default:
            break;
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}