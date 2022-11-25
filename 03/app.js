// const min = 1;
// const max = 100;

// const a = randomNumber(min, max);
// const b = randomNumber(min, max);
// const c = randomNumber(min, max);

// console.log(a, b, c);


// getSum(9,8,7);




// function randomNumber(min, max) {
//     return Math.round((Math.random() * (max - min)) + min);
// }

function getSum(x, y, z) {
    let sum = 0;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    tempSum = x + y + z;
    //sum = tempSum - Math.min(x,y,z);
    // console.log(sum);
    return tempSum - Math.min(x,y,z);
}


const isEven = function even(number) {
    if(typeof number != "number") return null;
    else if(number%2 == 0) return true;
    else return false;
}


function showInfo(a, b) {
    switch(true) {
        case b == null:
            console.log(`Podany argument ${b} nie jest liczbą`);
            break;

        case b%2 == 0:
            console.log(`Podany argument ${b} jest parzysty`);
            break;

        case b%2 != 0:
            console.log(`Podany argument ${b} nie jest parzysty`);
            break;
    }
}
