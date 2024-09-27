
const a = '4.2';
const b = 9;
console.log(a, b);
//typeof shows to me its str/number
console.log(typeof a);
console.log(typeof b);

const c = parseInt(a);
//działania arytmetyczne: + - * / %
const res1 = c + b;
const res2 = c - b;
const res3 = c * b;
const res4 = c / b;
const res5 = c % b;

console.log(res1, res2, res3, res4, res5);

//funkcja if / else

function funkcjaNr20(program) {
    if(program > 20){
        console.log(program + 'jest wieksze niż 20');
    }else{
        console.log(program + 'jest mniejsze niż 20');
    }
}

funkcjaNr20(res1);
funkcjaNr20(res2);
funkcjaNr20(res3);
funkcjaNr20(res4);
funkcjaNr20(res5);

//poprzez tzw. inspect strony/console widać wyniki:
//13jest mniejsze niż 20
//-5jest mniejsze niż 20
//36jest wieksze niż 20
//0.4444444444444444jest mniejsze niż 20
//4jest mniejsze niż 20

//chyba dobrze ;-) 