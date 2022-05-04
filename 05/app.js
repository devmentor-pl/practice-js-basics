function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
    this.addGrade = function(subject, grade) {
        if (Array.isArray(this.grades[subject])) {
            this.grades[subject].push(grade);
        } else {
            this.grades[subject] = [grade];
        }

    }
    this.avgSubject = function(subject) {
        const subjectGrades = this.grades[subject];
        const avarage = subjectGrades.reduce((prev, current) => prev + current) / subjectGrades.length;

        return avarage;
    }
    this.avgGeneral = function() {
        const numberOfSUbjects = Object.keys(this.grades).length;
        let avg = 0;
        for (const key in this.grades) {
            avg += (this.avgSubject([key]));
        }
        avg = avg / numberOfSUbjects;

        return avg;

    }
}

const student1 = new Student('Mariana', 'Golovatyuk');
student1.addGrade('math', 3);
student1.addGrade('math', 4);
student1.addGrade('english', 5);
student1.addGrade('polish', 5);
console.log(student1.avgSubject('math'));
console.log(student1.avgGeneral());