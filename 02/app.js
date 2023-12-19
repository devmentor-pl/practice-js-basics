
const x = Number(prompt("write a number"));

if(x >= 1 && x < 10) {
    for(let i=1; i<=9; i++){
        const result = x * i;
        console.log(x + ' x ' + i + ' = ' + result);
    }
} else {
    alert('Wrong! Try again');
}

const a = Number(prompt('write a from 1 to 10'));
const n = Number(prompt('write n from 0 to 10'));
if(a >= 1 && a <= 10 && n >= 0 && n <= 10) { 
    if(n === 0) {
        console.log('when n = 0 its always 1');
    } else { 
        let iter = 0;
        let result = 1;
        let info = '';
        while(iter < n) {
            result = result * a;

            if(iter > 0) {
                info = info + ' * '

            }
            
            info = info + a;
            iter++;
            
        }

        info = info + ' = ' + result;

        console.log(result);
        console.log(info);
    }
} else {
    alert('wrong numbers');
}