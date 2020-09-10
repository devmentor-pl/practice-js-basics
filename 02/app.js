
/* rozwiązanie z pętlą for */
let x;

while(!x || !(x >= 1) || !(x <= 9)) {
    x = parseInt(prompt('Please enter integer between 1 and 9'));
}

console.log('Tabliczka mnożenia za pomocą for:');
for(let i=1; i<=9; i++) {
    console.log(i + ' * ' + x + ' = ', i * x);
}


/* rozwiązanie z pętlą while  */
let i=1;

console.log('Tabliczka mnożenia za pomocą while:');
while (i<=9) {
    console.log(i + ' * ' + x + ' = ', i * x);
    i++;
}

let a, n;

while(!a || !(a >= 1) || !(a <= 9)) {
    a = parseInt(prompt('Please enter integer base between 1 and 9'));
}

while(!n || !(n >= 1) || !(n <= 9)) {
    n = parseInt(prompt('Please enter integer exponent between 1 and 9'));
}

i = 1;
result = a.toString();

while(i < n){
    result += ' * ' + a;
    i++;
}
result += ' = ' + Math.pow(a, n);
console.log(result);
