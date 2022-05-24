const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);


function getSum(x,y,z){
    let d=Number(x)
    let e=Number(y)
    let f=Number(z)
const arr =new Array(d,e,f)
const max = Math.max.apply(null,arr );
  arr.splice(arr.indexOf(max), 1);
  const max2nd = Math.max.apply(null, arr);
  return max + max2nd;
}
console.log(getSum(a,b,c))


function isEven (num){
if(isNaN(num)){
return null
}else if( num%2===0){
    return true
}else{
return false
}
}
function showInfo(a,b){
switch (b){
    case null:
        console.log(`podany argument" ${b} nie jest liczba`)
        case true:
        console.log(`podany argument ${b} jest parzysty`)
        case false:
        console.log(`podany argument ${b} jest nieparzysty`)
}
}
 function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);}