const min = 1;
const max = 100;

const a = randomNumber(min, max);//
const b = randomNumber(min, max);//
const c = randomNumber(min, max);//
//const a = "1";
//const b = "3";
//const c = "2";
const tab = [a,b,c];

console.log(a, b, c);

const sum = getSum(a, b, c);
function getSum(x, y ,z) {
if (typeof(x) === 'string') {
    const parsed = Number.parseInt(x, 10);
    console.log(parsed)
}
if (typeof(y) === 'string') {
    const parsedTwo = Number.parseInt(y, 10);
    console.log(parsedTwo)
}
if (typeof(z) === 'string') {
    const parsedThird = Number.parseInt(z, 10);
    console.log(parsedThird)
}
const array = [x, y, z]
const biggest = []
const max = Math.max(...array)
const min = Math.min(...array)
const maxArray = [max]
const minArray = [min]
const nev = biggest.push(max)
const remove = array.splice(0,[minArray[0]])
const min2 = Math.min(...array)
const res = addition(max, min2)
function addition(g, h) {

return g + h;
}
console.log(array)
console.log(max)
console.log(nev)
console.log(biggest)
console.log(min)
console.log(remove)
console.log(min2)
return res; 
}
console.log(sum)
const isEven = function(x) {   
    if (typeof(x) !== 'number') {
        return null;
    }
    if (typeof(x) === 'number') {
        if (x % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    return x;
}
const even = isEven(sum);
const g = 'null';
function showInfo (d, e) {
    if (e !== null && e !== true && e !== false) { //zapytaj o dzialanie && i ||//
        return;
    }
    switch (e) {
        case (null):
            console.log("Podany argument (\""+ e + "\") nie jest liczbą");
            break;
        case (true):
            console.log("Podany argument (\""+ e + "\") jest parzysty");
            break;
        case (false):
            console.log("Podany argument (\""+ e + "\") jest nieparzysty");
            break;        
    }
    return {d, e};
}
showInfo(sum, even);


function randomNumber(min, max) {
    return Math.round((Math.random() * max - min) + min);
}