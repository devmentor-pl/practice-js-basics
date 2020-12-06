/* Funkcja 1 */

const arr = createArray(10, 200);
console.log('Wylosowana tablica o określonym przedziale: ' + arr);


function createArray(minNum, maxNum) {
    const array = [];
    const inputUser = parseInt(prompt('Podaj ilu elementową chcesz mieć tablcę:'))
    for (let i = 0; i < inputUser; i++) {
        const num = Math.round(Math.random() * (maxNum - minNum)) + minNum;
        array.push(num);
    }
    return array;
}

/*****************************************************************************************/

/* Funkcja 2 */

const largest = getLargest(arr);
console.log('Wybrane 10 największych liczb z tablicy: ' + largest);


function getLargest(array) {
    const arraySort = array.sort(function (a, b) {
        return b - a;
    });
    const arraySlice = arraySort.slice(0, 10);
    return arraySlice;
}

/*****************************************************************************************/

/* Funkcja 3 */

const avg = getAvg(largest);
console.log('Średnia artmetyczna z 10 największych liczb: ' + avg);

function getAvg(array) {
    const resultSum = array.reduce(function (a, b) {
        return (a + b);
    });
    const resultAvg = resultSum / array.length;
    return resultAvg;
}


/*****************************************************************************************/