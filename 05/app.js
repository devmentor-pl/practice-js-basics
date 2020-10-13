function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
    this.allGrades = [];
}

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
        console.log('Dodano przedmiot ' + subject + ' oraz ocenę: ' + grade);
    }

    this.grades[subject].push(grade);
    this.allGrades.push(grade);
    console.log('Dodano ocenę ' + grade + ' do przedmiotu ' + subject);
}

Student.prototype.getAverage = function (subject) {
    let sum = 0;
    let avg = 0;
    if (typeof this.grades[subject] === 'undefined') {
        this.allGrades.forEach(function (element) {
            sum += element;
        })
        avg = sum / this.allGrades.length
        console.log('Suma wszystkich ocen tego studenta to: ' + avg);
    } else {
        this.grades[subject].forEach(element => {
            sum += element;
        });
        avg = sum / this.grades[subject].length;
        console.log('Suma ocen tego studenta z przedmiotu ' + subject + ' to: ' + avg);
    }
}

const student1 = new Student('Jan', 'Kowalski');