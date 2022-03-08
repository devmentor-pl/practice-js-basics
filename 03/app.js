const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const isEven = function (num){
    
    if (typeof num!=='number') {
        return null;
    }
    return (num%2===0) ? true : false;

};

console.log(a, b, c);

const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);


function getSum(a, b, c){

    const list = [];
    const num_a = parseInt(a);
    const num_b = parseInt(b);
    const num_c = parseInt(c); 

    if (!isNaN(num_a)) { list.push(num_a); }
    if (!isNaN(num_b)) { list.push(num_b); }
    if (!isNaN(num_c)) { list.push(num_c); }

    list.sort(function(a,b){
                return b - a; 
            });

    if (list.length>1) return list[0]+list[1];
    
    return -1; //jeżeli nie ma conajmniej 2 poprawnych liczb to zraca -1
}

function showInfo(num, even){    
    let result='Podany argument '+num;
    
    switch (even){
        case true:
            result+=' jest parzysty';
            break;
        case false:
            result+=' jest nieparzysty';
            break;
        default:
            result+=' nie jest liczbą';
            break;
    }    
    console.log(result);
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}