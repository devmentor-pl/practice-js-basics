function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
    this.allGrades = [];
}

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade);
    this.allGrades.push(grade);
}

Student.prototype.getAverage = function (subject) {
    let sum = 0;
    if (typeof this.grades[subject] === 'undefined') {
        this.allGrades.forEach(function (element) {
            sum += element;
        })
        return (sum / this.allGrades.length);
    } else {
        this.grades[subject].forEach(element => {
            sum += element;
        });
        return (sum / this.grades[subject].length);
    }
}

const student1 = new Student('Jan', 'Kowalski');