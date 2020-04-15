const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(typeof a, a, typeof b, b, typeof c, c);

function getSum(a, b, c)
{
    if( a< b && a<c && b<c)
    {
        return b+c;
    }
    if( b< a )
    {
        return c+a;
    }
    
    {
        return b+a
    }
}
const sum =getSum(a, b, c);
console.log(sum);

const isEven = function(num)
{
    if(typeof num !== 'number')
    {
        return null;
    }
    if(num % 2 === 0)
    {
        return true;
    }
    return false;
    
}
console.log(isEven(sum))

function showInfo(num, isEvenValue)
{ 
    switch(isEvenValue)
    {
        case null:
            console.log(num +' to nie liczba');
            break;

        case true:
            console.log(num + ' Argument jest liczbą parzystą');
            break;
    
        case false:
            console.log(num + ' Argument nie jest liczbą parzystą'); 
            break;

        default:
            console.log(num + ' nie umiem określić argumentu');
            break;
    }
}
console.log(sum, isEven(sum));

function randomNumber(min, max) {
    return Math.round((Math.random() * max - min) + min);
}


