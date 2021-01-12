const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);







function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const sum = getSum(a,b,c);

function getSum(a,b,c) {
    let n1 = parseInt(a);
    let n2 = parseInt(b);
    let n3 = parseInt(c);
    let sum;
 
if(n1<n2 && n1<n3) {
    sum = n2 + n3;
}
else if(n2<n1 && n2<n3) {
    sum = n1 + n3;
}
else
    sum = n1 + n2;

    return sum;
}
console.log(sum);



const isEven = function(a) {
    if (typeof(a) !== 'number') {
        return null;
    } else if (typeof(a) === 'number') {
        if (a % 2 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return a;
    }
}
const even = isEven(sum);
console.log(even);




function showInfo(value,value2) {
    switch (value2) {
        case null:
            console.log('Podany argument',value,'nie jest liczbą');
            break;
            case true:
                console.log('Podany argument',value, 'jest parzysty');
            break;
            case false:
                console.log('Podany argument',value,'nie jest parzysty');
                break;
    }
}

showInfo(sum,even);