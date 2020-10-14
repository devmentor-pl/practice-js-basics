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
        let all = [];
        for (const subject in this.grades) {
            all = all.concat(this.grades[subject]);
        }
        avg = all.reduce(function (a, b) {
            return ((a + b) / all.length)
        });
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