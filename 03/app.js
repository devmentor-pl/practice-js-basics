const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}



// ---------------------->

function getSum(x,y,z) {
    let tab=[parseInt(x),parseInt(y),parseInt(z)]
    tab.sort(function(a,b){ 
        return b-a;
    });
    let twoHighestElements=tab.slice(0,2);
    let sum=twoHighestElements.reduce(function(total,num){
        return total+=num;
    });
    return sum;
}
// --------------------->

const isEven=function(number){
    let result;
    if(isNaN(number)) {result=null} else {return checkIfEven(number)};
    function checkIfEven(element){
        return element%2===0?true:false;
    }
    return result;
}

// --------------------->
let cos=true;
function showInfo (a,b){
    
    switch(b) {
        case null:
            num = 'Podany argument '+a+' nie jest liczba';
            break;
        case true: 
            num ='Podany argument '+a+' jest parzysty';
            break;
        case false: 
            num ='Podany argument '+a+' jest nieparzysty';
            break;
    }
    console.log(num);
}
// --------------------->
let abcSum=getSum(a,b,c);

let isAbcSumEven=isEven(abcSum);

showInfo(abcSum,isAbcSumEven);



