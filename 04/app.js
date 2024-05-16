function numberArray(min, max) {

	const emptyArrey = [];
	for (let i = 0; i < 20; i++) {
		const randomNumbers = Math.round(Math.random() * (max - min) + min);

		emptyArrey.push(randomNumbers);
	}
	return emptyArrey;
}




function getBigest(emptyArrey) {
    emptyArrey.sort(function (a, b) {
        return b - a
    })

    const cutArray = emptyArrey.slice(0, 10)
    console.log(cutArray);
}
console.log(getBigest(numberArray(1,20)));
