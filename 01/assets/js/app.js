const a = +'4.2';
const b = 9;

console.log(typeof a);
console.log(typeof b);

const result = +a + b;
console.log(result);
const result1 = a - b;
console.log(result1);
const result2 = a * b;
console.log(result2);
const result3 = a / b;
console.log(result3);

if( result > 20){
    console.log(`Wynik dodawania ${result} jest większy niż 20`);
}else{
    console.log(`Wynik dodawania ${result} jest mniejszy niż 20`);
};

if( result1 > 20){
    console.log(`Wynik dodawania ${result1} jest większy niż 20`);
}else{
    console.log(`Wynik dodawania ${result1} jest mniejszy niż 20`);
};

if( result2 > 20){
    console.log(`Wynik dodawania ${result2} jest większy niż 20`);
}else{
    console.log(`Wynik dodawania ${result2} jest mniejszy niż 20`);
};

if( result3 > 20){
    console.log(`Wynik dodawania ${result3} jest większy niż 20`);
}else{
    console.log(`Wynik dodawania ${result3} jest mniejszy niż 20`);
};

