const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof(a));
console.log(typeof(b));

const add = Number(a) + Number(b);
const sub = Number(a) - Number(b);
const multi = Number(a) * Number(b);
const div = Number(a) / Number(b);

const maths= [add, sub, multi, div];

maths.forEach(element => {
    if (element < 20){
    console.log(`${element} jest mniejsze od 20`);
    }
    else{
        console.log(`${element} jest większe od 20`);
    }  
});