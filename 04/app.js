function createRandomArray(min, max){
    const arr = [];
    const max = 20;
    for(i=0; i<max; i++){
        arr.push(Math.round(Math.random() * (max-min) + min ));
    }

    return arr;
}
