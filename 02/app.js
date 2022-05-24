
/* rozwiązanie z pętlą for */
const x =Number(prompt("podaj liczbe"));
for(let i=0;i<11;i++){
  i++
console.log(x,"x",i,"=",x*i)
--i
}
/* rozwiązanie z pętlą while  */

let multiple=0
while(multiple<11){
   console.log(x,"x",multiple,"=",x*multiple)
   multiple++
} 

const a=4
const n=3

let iter=0;
let result=1;
let info = "";
while(iter<n){
    result=result*a;
    if(iter>0){
        info += "*";
    }
    info +=a;
    iter++
}
info=info + "n"+result;

console.log(result)