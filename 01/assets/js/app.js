const a = '2.5';
const b = 8;

console.log(a, b);

console.log(typeof(a));
console.log(typeof(b));

let resOper0 = a+b; // konkatenacja 
let resOper1 = b+b;
let resOper2 = a-b;
let resOper3 = a/b;
let resOper4 = a*b;
let resOper5 = a%b;
let resOper6 = a**b;    // tego (chyba) brakuje w materiałach 
// let resOper7 = a; a++;  //... czemu takie coś niedziała? 
// let resOper8 = a; ++a;  //   Muszę sobie doczytać, aaaa
// let resOper9 = b; --b;      //nie działa bo a i b są zdeklarowane z key const
// let resOper10 = b; b--;     // a const nie można zmienić 
let resOper_a = a;
let resOper7 = resOper_a++;   // postinkrementacja 
let resOper8 = ++resOper_a;  // preinkrementacja 
let resOper_b = b; 
let resOper9 = --resOper_b;       // przy tym w materiałach jest chyba błąd str 37 moduł04
let resOper10 = resOper_b--;        // dekrementacja  jest jako - a chyba powinno być -- 

let arrayRes = [ +resOper0, resOper1, resOper2, resOper3, resOper4, resOper5, resOper6, resOper7, resOper8, resOper9, resOper10];
console.log(arrayRes);

let largeRes = [];
let smallRes = [];
let twentyRes = [];

//wydaje mi się, że prościej jest to zrobić for'em
   

    for(let i=0; i<arrayRes.length; ++i){

        if(arrayRes[i]>20){
            largeRes.push(arrayRes[i])
        }
            else if(arrayRes[i]<20) {
                smallRes.push(arrayRes[i])
            }

            else 
            twentyRes.push(arrayRes[i]);

    };
console.log(largeRes);
console.log(smallRes);
console.log(twentyRes)




























// //spr. metode porownanie wartości dwóch tablic ! 
//     for(let i=0; i<=10 & arrayRes[i]>20; ++i){
//         console.log(i)
//         smallRes.push(arrayRes[i]);
// };
// console.log(smallRes);
 



// console.log(
//     resOper0, resOper1, resOper2, resOper3, resOper4, resOper5, resOper6, resOper7, resOper8, resOper9, resOper10
//     );

    // for(i=0; i<=10; ++i){
    //     // console.log(i);
    //     let nameResOperX = +"resOper"+i;
     
    // if("nameResOperX">20){
    //     largeRes.push(nameResOperX);
    // }
    
    // console.log(largeRes);
     
    // };




