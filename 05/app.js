function Student (initFirsName, initLastName) {
    this.firstName = initFirsName;
    this.lastName = initLastName;
    this.grades = {

    }
}

Student.prototype.showFullName = function() {
    console.log(this.firstName, this.lastName);
}

Student.prototype.addGrade = function(subject, grade) {

    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.showGrades = function() {
    // console.log(this.grades);
    for (const element in this.grades) {
        console.log(element + ':');
        console.log(this.grades[element]);
    }
}

Student.prototype.getAverageGrade = function(subject) {

    if (subject !== undefined) {

        let oneGradeTotal = 0;
        let numberGrades = 0;
        for (const el in this.grades) {

            if (subject === el) { // if(typeof this.grades[subject] !== 'undefined')

                this.grades[el].forEach(function(el) { //  this.grades[subject].forEach
                    oneGradeTotal += el;
                });
                                                    //wychodzi liczba *2, nie do końca rozumiem
                //  console.log (oneGradeTotal);
            }
            
            numberGrades = this.grades[subject].length;
            // console.log (this.grades[el].length);
        }

        let oneSubjectAvg = oneGradeTotal / numberGrades;
        console.log(oneSubjectAvg);
        // console.log(subject);

    }
    else {

        let amountGrades = 0;
        let totalGradesNumber = 0;
         
        for (const element in this.grades) {

            amountGrades += this.grades[element].length;
            this.grades[element].forEach(function(el) {

                totalGradesNumber+= el; //reduce
            });
        }

        let avg = totalGradesNumber / amountGrades;
        // console.log(amountGrades);
        // console.log(totalGradesNumber);
        console.log(avg);
    }
}


const firstStudent = new Student('Jan', 'Kowalski');
firstStudent.addGrade('math', 1);
firstStudent.addGrade('math', 2);
firstStudent.addGrade('math', 4);
firstStudent.addGrade('history', 6);

const secondStudent = new Student('Piotr', 'Nowak');
secondStudent.addGrade('polish', 3);
secondStudent.addGrade('math', 5);
secondStudent.addGrade('polish', 3);
secondStudent.addGrade('math', 1);

// firstStudent.showFullName();
// firstStudent.showGrades();

// secondStudent.showFullName();
// secondStudent.showGrades();

firstStudent.getAverageGrade('math');
secondStudent.getAverageGrade('math');
