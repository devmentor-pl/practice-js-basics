const min = 1;
const max = 100;

const isEvenGo = isEven;    //infO deklaracja wyrażeń fn też musi iść na góre 

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const sumMaxMin = getSum(a, b, c);      //?dev Trochę zastanawiałem się czy użyć tu let czy const, jak jest przypisana funkcja to to działa tak samo jak w arr/object?
console.log(sumMaxMin);                 //Oki powinno być const by nie można było zmienić wartości wyliczonej przez funkcje 

const quEven = isEvenGo(sumMaxMin);
console.log(quEven);

showInfo(sumMaxMin, quEven);



// const nuberI= -2.332;
// console.log(parseInt(nuberI));
// console.log(~~nuberI)


//infO WYRAŻENIA SYNTAKTYCZNE: np. function myFunc(...) {...}
    // SYNTAKTYKA  jeden z trzech głównych działów semiotyki, obok semantyki i pragmatyki. Ad:LOGIKA
        //def.: bada relacje które zachodzą między wyrażeniami(znakami języka/gramatyką) i mają charakter formalny 
            // np. implikacja("wynikanie") = reprezentowanie stałych przez zmienne 

/*notE WYRAŻENIA FUNKCYJE pot. okazjonalne 
        a)zId: zał. "funkcja znaczeniowa"
        b)bezId: funkcja anonimowa (również literał funkcyjny lub lambda-abstrakcja) 
*/



//infO to nie jest najlepsze rozwiazanie bo zapomalem ze hosting dziala bez wartosci i mam blad
//const isEvenGo = function isEven(getNumber){...}




function isEven(getNumber){
    if(typeof getNumber === "number"){           //notE ZAPIS "number" a nie //// Number
        let quEven = getNumber % 2 === 0 ? true : false;
        return quEven;
    } else {            //?dev Potrzebuje tu else? Lepiej dać? Nie ma znaczenia?
        return null;
    };        
};                      //raczej tak ... bo mi się to wyświetlić może?

//infO//!średnik obligatoryjny, zamknięcie value init zmiennej  





function showInfo(anyVal, partiVal){
    if(anyVal){
        switch(partiVal){
            case null:
                console.log("Podany argument "+ anyVal +" nie jest liczbą");
                break;
            case false:
                console.log("Podany argument "+ anyVal +" jest nieparzysty");
                break;
            case true:
                console.log("Podany argument "+ anyVal +" jest parzysty");
                break;
            default:
                console.log('Podano błędne dane!');
        }  
    }
    return null;
}




function getSum(a, b, c){
    let arrNo = [parseInt(a), parseInt(b), parseInt(c)]; //?dev Konwersja na Number opcja nr ~~nazwaZmiennej czym się różnią te 3 sposoby ? 
    let sortNo = arrNo.sort(function(x, y){
        return y-x;
    });
    arrNo = sortNo[0]+sortNo[1];
    
 //   return console.log(sortNo+'|'+arrNo);
    return arrNo;

}  
//infO Gdy deklarujesz zwykłą funkcję nie musisz umieszczać na końcu średnika 
//     (nie powinno się umieszczać) - bo po wąsach nie trzeba, chyba że... jest to wyrażenie warunkowe! 

function randomNumber(min, max) {
  //                                 *        +       a
// notE                          (max-min)   jest po to by nie było     max+1    w przedziale 
    // czyli chyba jeśli chodzi o przedział możliwości to jest okay,
    //?ver ale coś mi świta że i tak powinno być floor a nie round - aby zachować stosunek statystyczny i nie faworyzować wyników zaokrągleń w góre 
    return Math.round((Math.random() * (max - min)) + min);
}
//?ver Sprawdź dokładnie zapis tej funkcji losującej, jej zakres 
//?dev Czy my tu czasem nie mamy do czynienia z przedziałem min




































/*// to poza kocnertem xd 


//*edu:
//FIXME: 
//?dev  Z czego wynika ta różnica w wyniki, tzn. co tak naprawdę kryje się pod +(zmienna)?
const pointNumber = ".01  dasd";
console.log(parseFloat(pointNumber));   // 0.01 
console.log(+pointNumber);             // NaN - bezpieczna konwencja +(pointNumber) bo pomija wartości zawierające znaki inne niż number

const nuberI= 2.332;

console.log(parseInt(nuberI));

const pElList = document.querySelectorAll('p')
console.log(pElList);
const pElList1 = [...pElList];
const pELforEach = pElList1.forEach(function(el, index,){
    const plElList3 = el+"->"+index;
    return plElList3;
});

console.log(pELforEach);
    
*/