const x = 2;

const type = typeof x;
const addResult = add(2);
const subResult = sub(2);
const mulResult = mul(2);
const devResult = dev(2);

console.log(addResult, subResult, mulResult, devResult, type);

function add(x) {
    return x + 22;
}

function sub(x) {
    return x + 1;
}

function mul(x) {
    return x * 10;
}

function dev(x) {
    return x / 2;
}

const result = 0;

function checkResult(transform) {
    const result = transform;
    console.log(result);
    if(result > 20) {
        console.log(result);
    } else {
        console.log('Wynik działania jest mniejszy od 20');
    }
}

checkResult(add(2));
