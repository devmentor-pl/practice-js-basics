function Student (saveFirstName, saveLastName) {
        this.firstName = saveFirstName;
        this.lastName = saveLastName;
        this.grades = {}
}

Student.prototype.addGrade = function(grade,subject) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade)
}


Student.prototype.getAverage = function(subject) {
    
    if (typeof subject !== 'undefined' ) {
        if(typeof this.grades[subject] === 'undefined') {
            return 'Nie ma takiego przedmiotu!'
        }
        const mean = getMeanOfArray(this.grades[subject])
    
        return mean;
    }

    if(typeof this.grades === 'undefined') {
        return 'Nie ma ocen z żadnego przedmiotu!'
    }

    const allMeans = [];
    for (const subject in this.grades) {
        allMeans.push(getMeanOfArray(this.grades[subject]));
    }

    const mean = getMeanOfArray(allMeans);

    return mean;

}



function getMeanOfArray(array) {
    const sum = array.reduce(sumUp,0);
    const mean = sum / array.length;
    
    function sumUp(accumulator, value) {
        return accumulator + value;
    }

    return mean;
}




const student1 = new Student("Dario", "Mario");
student1.addGrade(2,'math');
student1.addGrade(4,'math');
student1.addGrade(4,'eng');
student1.addGrade(4,'eng');
console.log(student1);
console.log(student1.getAverage());
console.log(student1.getAverage('eng'));
