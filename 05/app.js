const Student = function(name, surname) {
    this.name = name;
    this.surname = surname;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject) {
    let sum = 0;
    if(typeof subject !== 'undefined'){
    for (const key in this.grades[subject]) {
        sum += this.grades[subject][key];
    }
    return console.log(`Średnia ocen z przedmiotu ${subject} wynosi ${(sum / this.grades[subject].length).toFixed(2)}`);
    } else {
        let counter = 0;
        for (const key in this.grades) {
            for (const i in this.grades[key]) {
                sum += this.grades[key][i];
                counter++;
            }
        }
        return console.log(`Średnia ocen ze wszystkich przedmiotów wynosi ${(sum / counter).toFixed(2)}`);
        }
    }



const student1 = new Student('Jan', 'Kowalski');
student1.addGrade('matematyka', 1);
student1.addGrade('matematyka', 3);
student1.addGrade('matematyka', 4);
student1.addGrade('matematyka', 5);
student1.addGrade('matematyka', 5);
student1.addGrade('matematyka', 2);
student1.addGrade('angielski', 3);
student1.addGrade('angielski', 4);
student1.addGrade('polski', 4);
student1.addGrade('polski', 1);
student1.addGrade('niemiecki', 5);