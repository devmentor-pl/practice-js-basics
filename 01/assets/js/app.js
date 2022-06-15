const a = '4.2';
const b = 9;
console.log("%cTypy zmiennych:", "color: #155983; font-weight: bold;font-size:14px");
console.log(typeof a, typeof b)

const aNum = parseFloat(a) // zmiana typu na number

const results = {}

results.multiplyResult = multiplay(aNum,b)
results.divideResult = divide(aNum,b)
results.addResult = add(aNum,b)
results.substractResult = substract(aNum,b)
results.moduloResult = modulo(aNum,b)

console.log("%cWszystkie wyniki:", "color: #155983; font-weight: bold;font-size:14px");
for (let key in results)
{
    console.log(key + ' = ' + results[key])
}

console.log("%cWyniki większe od 20:", "color: #155983; font-weight: bold;font-size:14px");
for (let key in results)
{
    if (results[key] > 20) console.log(key + ' = ' + results[key])
}

function multiplay(a,b) {
    return a*b
}
function divide(a,b) {
    return a/b
}
function add(a,b) {
    return a+b
}
function substract(a,b) {
    return a-b
}
function modulo(a,b) {
    return a%b
}