let sum;

function getSum(p1, p2, p3) {
    console.log( p1, p2, p3);
    let highest = Math.max(p1, p2, p3);
    let lowest = Math.min(p1, p2, p3);
    let middle = p1 + p2 + p3 - highest - lowest;
    return highest + middle;
}


function handleSubmit(event) {
    event.preventDefault(); 
    
    const firstNum = parseInt(document.getElementById('firstNum').value);
    const secondNum = parseInt(document.getElementById('secondNum').value);
    const thirdNum = parseInt(document.getElementById('thirdNum').value);
    
    sum = getSum(firstNum, secondNum, thirdNum);
    
    document.getElementById('firstNum').value = "";
    document.getElementById('secondNum').value = "";
    document.getElementById('thirdNum').value = "";
    console.log(sum);

    document.getElementById('isEvenNum').value = sum;
}

const getSumButton = document.getElementById('getSumButton');
getSumButton.addEventListener('click', handleSubmit);


let isEven = function(givenNumber){
    if(typeof(givenNumber) !== 'number' || isNaN(givenNumber)){
        return null;
    }else{
        if (givenNumber % 2 === 0){
            return true;
        } else{
            return false;
        }
    }
};

function showInfo(x, type){
    let text;
    switch(type){
        case null:
            text = `Podany argument ${x} nie jest liczbą`
        break;
        case true:
            text = `Podany argument ${x} jest parzysty`
        break;
        case false:
            text = `Podany argument ${x} jest nieparzysty`
        break;
    }    
    return text
}


function handleIsEvenSubmit (event){
    event.preventDefault();

    const isEvenNum = Number(document.getElementById('isEvenNum').value);
    console.log(typeof(isEvenNum));

    const isEvenResult = isEven(isEvenNum);
    console.log(isEvenResult);

    document.getElementById('infoP').innerText = isEvenResult;
    document.getElementById('interpretate').innerText = isEvenResult;
    
    document.getElementById('interResult').innerText = showInfo(sum, isEvenResult);
    
}

const isEvenButton = document.getElementById('isEvenButton');
isEvenButton.addEventListener('click', handleIsEvenSubmit);


console.log(showInfo)