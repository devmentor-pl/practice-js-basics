
/* rozwiązanie z pętlą for */
// const x = 4;

function chooseOperation(){
    const operation = prompt("Wybierz operację: mnożenie lub potęgowanie");
    if(operation === "mnożenie"){
        multiply();
    }else if(operation === "potęgowanie"){
        exponentiation();
    }else{
        chooseOperation();
    }
};

chooseOperation();



function multiply(){
    const x = prompt("Podaj liczbę z przediału od 1 do 9!");
    if(x>0 && x<=9){
        for(let i = 1; i <= 9; i++){
            console.log(`${i} x ${x} = ${i*x}`)
        }
    } else {
        multiply();
    }
}

/* rozwiązanie z pętlą while  */
function exponentiation(){
    const base = prompt("Podaj podstawę potęgi!");
    
    const expotent = prompt("Podaj wykładnik potęgi!");
    if(base !=="" &&expotent !==""){
        let arr = new Array(parseInt(expotent));
        arr.fill(base);
        strArr = arr.toString().replaceAll(",", " * ");
        const result = arr.reduce((a,b)=>a*b)
        console.log(`${strArr} = ${result}`);
    } else {
        chooseOperation();
    }
    
    // let result=base;
    // let e = 1;
    // while(e < expotent){
    //     console.log(result)
    //     result *= base;
    //     e++
    // }
    // console.log(result)
    
}