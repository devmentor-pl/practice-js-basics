const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(typeof a, a, typeof b, b, typeof c, c);

const sum = function getSum()
{
    if(a<=b && a>=c && b>=c) 
    {
        result = a+b;
    }

    if (a>=b && a>=c && b>=c)
    {
        result = a+b;
    }

     if(a>=b && a>=c && b<=c)
    {
        result = a+c;
    }

    if(a>=b && a<=c && b<=c)
    {
        result = a+c;
    }

    if(a<=b && a<=c && b<=c)
    {
        result = c+b;
    }

    if(a<=b && a<=c && b>=c)
    {
        result = c+b;
    }
    return result;
}

console.log(sum('result'));
//console.log(typeof sum);
const d = (sum('result'));
//console.log(typeof d, d);

const check = function isEven()
{
    checkResult = (d % 2 === 0) ? true:false;
    return checkResult;
}
console.log(check('checkResult'));

const info = function showInfo()
{ 
    switch(check('checkResult'))
    {

        case true:
            caseResult=('Argument jest liczbą parzystą');
            break;
    
        case false:
            caseResult=('Argument nie jest liczbą parzystą'); 
            break;

        default:
            caseResult=('null');
            break;
    }
    return caseResult;
}
console.log(info('caseResult'));

function randomNumber(min, max) {
    return Math.round((Math.random() * max - min) + min);
}


