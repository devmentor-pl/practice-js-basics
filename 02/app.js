
/* rozwiązanie z pętlą for */
/*const x=4;
let result = 0;

const number = parseInt(prompt('Enter a number: '));

const range = parseInt(prompt('Enter a range: '));

for (let i = 1; i<=range;i++){
    result = number*i;
    console.log(`${number} * ${i} = ${result}`);
}
*/


/* rozwiązanie z pętlą while*/

let a = parseInt(prompt('Type number 1'))
let b = parseInt(prompt('Type number 2'))
if(isNaN(a) || isNaN(b)) {
  console.log("Bad number")
}
else {
  let expo = 1;
  let i = 1;
  let j = '';
  while (i <= b) {
        i++;
        expo = expo * a
        if (i===2) {
          j=a;
        }
        else {
          j = j+'*'+a;
        }
}
  console.log(j,expo)
}






