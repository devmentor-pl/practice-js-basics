const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const sum = getSum(a,b,c)

const isEven = function(num){
    if(typeof num !== "number"){
        return null;
    }else{
        if(num % 2 === 0){
            return true
        }
        else{
            return false
        }
    }
}
const even = isEven(sum);

showInfo(sum, even)

function showInfo(par1, par2){
    switch(par2){
        case null:
            console.log("Podany argument " + par1 + " nie jest liczbą");
            break;
        case true:
            console.log("Podany argument " + par1 + " jest parzysty");
            break;
        case false:
            console.log("Podany argument " + par1 + " jest nieparzysty");
            break;
        default: alert("Błędne dane")
                
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(num1, num2, num3){
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    const n3 = parseInt(num3);
    
    const numbers = [n1, n2, n3];
    numbers.sort((a,b) => b - a);
 
    return numbers[0] + numbers[1];
}
