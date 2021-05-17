const min = 1;
const max = 100;
const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);
console.log(a, b, c);
function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a,b,c){
    a=Math.round(a);
    b=Math.round(b);
    c=Math.round(c);
    let max1 = Math.max(a,b,c);
    let max2 = 0;
    if(max1==a){
        max2 = Math.max(b,c);
    }else if(max1==b){
        max2 = Math.max(a,c);
    }else if(max1==c){
        max2 = Math.max(a,b);
    }
    return max1 + max2;    
}

var isEven = function(nr) {return typeof(nr)!=="number" ? null : nr%2==0 ? true : false  };

function showInfo(any, bool){
switch (bool){
    case null:
        console.log(`Podany argument ${any} nie jest liczbą`);
        break;
    case true:
        console.log(`Podany argument ${any} jest parzysty`);
        break;
    case false:
        console.log(`Podany argument ${any} jest nieparzysty`);
        break;
    default:
        console.log('');
    }
}

const sum = getSum(a,b,c);
const even = isEven(sum);
showInfo(sum,even);

