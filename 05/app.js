const Student = function(name, surname) {
    this.name = name;
    this.surname = surname;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade) {
    this.grades[subject] = grade;
}

const student1 = new Student('Jan', 'Kowalski');