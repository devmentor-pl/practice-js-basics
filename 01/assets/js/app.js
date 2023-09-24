const a = '4.2';
const b = 9;

console.log(a, b);

console.log('a: ', typeof(a))
console.log('b: ', typeof(b))

const suma = Number(a) + Number(b);
const roznica = Number(a) - Number(b);
const iloczyn = Number(a) * Number(b);
const iloraz = Number(a) / Number(b);
const modulo = Number(a) % Number(b);

console.log('suma: ', suma);
console.log("różnica", roznica);
console.log("iloczyn", iloczyn);
console.log("iloraz", iloraz);
console.log('modulo', modulo);

if(suma > 20 )
{
    console.log("Suma a i b jest większa niż 20");
}
else{
    console.log("Suma a i b nie jest większa niż 20");
}

if(roznica > 20 )
{
    console.log("roznica a i b jest większa niż 20");
}
else{
    console.log("roznica a i b nie jest większa niż 20");
}

if(iloczyn > 20 )
{
    console.log("iloczyn a i b jest większa niż 20");
}
else{
    console.log("iloczyn a i b nie jest większa niż 20");
}

if(iloraz > 20 )
{
    console.log("iloraz a i b jest większa niż 20");
}
else{
    console.log("iloraz a i b nie jest większa niż 20");
}

if(modulo > 20 )
{
    console.log("modulo a i b jest większa niż 20");
}
else{
    console.log("modulo a i b nie jest większa niż 20");
}