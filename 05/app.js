function Student(initFirstName, initLastName, initGrades) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = initGrades;
}

const student1 = new Student('Bartosz', 'Zagaja', '1');

console.log(student1);