let x = -1;
let a;
let n;
let text = '';
let sol = 1;
//MNOŻENIE
while((x <= 0 ) || (x > 9))
{
  x = parseInt(prompt("podaj liczbe"));
  a = parseInt(prompt("podaj podstawę potęgi"));
  n = parseInt(prompt("podaj wykładnik potęgi"));
}

 for(let i = 1; i <= 9; i++) 
{   
    console.log(x, "x", i, "= ", x*i);
}

//POTEGOWANIE
if(n == 0) {
  console.log(a, "^ 0 = 1");
}
else {
  while(n>0) {
    sol = sol * a;
    if(n>1) {
      text = text + a + " * ";
    }
    else text = text + a + " = " + sol;
    n--;
  }
  console.log(text);
}

