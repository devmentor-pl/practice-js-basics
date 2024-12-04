const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof(a), typeof(b));

function performAction(number1, number2, mathOperation) {

    const numA = parseFloat(number1);
    const numB = parseFloat(number2);

    switch (mathOperation) {
        case '+':
            result = numA + numB;
            break;

        case '-':
            result = numA - numB;
            break;

        case '*': 
            result = numA * numB;
            break;
        
        case '/':
            result = numA / numB;
            break;

        case '%':
            result = numA % numB;
            break;
        
        default:
            result = 'Niepoprawna operacja';
    }

    if (result > 20){
        console.log('Wynik operacji jest większy od 20')
    } else if (result === 20) {
        console.log('Wynik operacji wynosi 20');
    } else {
        console.log('Wynik operacji jest mniejszy od 20')
    }

    return result;
}

console.log(performAction(a, b, '+'));
console.log(performAction(a, b, '-'));
console.log(performAction(a, b, '*'));
console.log(performAction(a, b, '/'));
console.log(performAction(a, b, '%'));