//notE RNG to skrót od wyrażenia „random number generator”

const arrRNG = createArrRNG;

const topMaxRNo = fnSortCutArr;








     
//?dev to zagnieżdzenie jest  okay? czy porypałem?
//infO //?dev Cyt. "Kolejna funkcja ma *przymować* przez argument tablicę i sortować..."
                            // zjadłeś sobie literke j ;)
                // czy może jednak to było specjalnie ? Bo w XVI w. staropolskim sj znalazłem że to słówko oznacza odsyłacz/wariant xD Ale to po Staropolsku ;P 

function createArrRNG(min, max){
    if(min<max && typeof min === "number" && typeof max === "number"){
        let arrRNG = [];

        for(let i=0; arrRNG.length<20; i++){
            let noRNG = Math.floor(Math.random()*(max-min+1)+min);
            arrRNG.push(noRNG);
        };
    return arrRNG;
        
    } else if(min>max){
        alert("Pierwsza wartość wejściowa musi być większa od drugiej");
        } else if (min === max){
            alert("Dane muszą mieć różną wartość");
            } else {
                alert("Nieprawidłowe dane wejściowe");
                }
}

function fnSortCutArr(arr){
    if(Array.isArray(arr) && arr.length > 10){

        let arrSort = [arr.sort(function(x, y){
            return y - x;
        })];
     //   arrSort.length = 10;    //?dev tak nie zadziała?
                                //?ver Mega dziwnie się to wyświetla w konsoli - jest PrtSc
        
        let arrCut = arrSort.slice(0, 10);
//?dev Kurcze coś tu robie źle nie wiem czemu mi się to nie odcina 

        return arrCut;

    } else {
        alert("Nieprawidłowe dane wejściowe");
    };
}

function averageSum(arr){
    let sumArr = arr.reduce(function(prev, curr){
        return prev + curr;
    });
}
//?dev tu mi już też coś zaczęło szwankować ;/ Ale nie wiem czemu 