const a = Number('4.2');
const b = Number(9);

console.log(a, b);

console.log(typeof(a), typeof(b))

const sum = function(c,d){
    return c + d;
}
const minus = function(c,d){
    return c - d
}
const multiply = function(c,d){
    return c * d
}
const divide = function(c,d, result){
    if(d==0){
        alert('nie dziel przez zero')
    } else c/d
return result

}

const check = function(result){
       if(result>20){
           alert ('jest większy od 20')
       } else alert('jest mniejszy od 20')

}

console.log(sum(a,b))
console.log(check())






