const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const addition = parseFloat(a)+b;
const concatenation = a+b;
const subtraction = parseFloat(a)-b;
const multiplication = parseFloat((parseFloat(a)*b).toFixed(2));
const division = parseFloat((parseFloat(a)/b).toFixed(2));
const modulus = parseFloat(a)%b;
let noConstA= a;
let noConstB= b;
let incrementA=++noConstA;
let incrementB=++noConstB;
let decrementA=--noConstA;
let decrementB=--noConstB;

const elements= [addition,concatenation,subtraction,multiplication,division,modulus,incrementA,incrementB,decrementA,decrementB];

elements.forEach(function biggerThanTwenty(element){
    element>20?console.log(element,'is bigger than 20!'):console.log(element,'is not bigger than 20!');
});
