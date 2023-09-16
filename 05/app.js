


function Student(name, surname) {
    this.name = name;
    this.surname = surname;
    this.grades = {}
}
Student.prototype.addGrade = function (subject, grade) {
    if (!this.grades[subject]) {
        this.grades[subject] = []
    }
    this.grades[subject].push(grade)
}
Student.prototype.subjectAverage = function (subject) {
    console.log(`Średnia arytmetyczna ocen z przedmiotu "${subject}" wynosi: ${this.grades[subject].reduce((a, b) => a + b) / this.grades[subject].length}`)

}
Student.prototype.averageFromAllSubjects = function () {
    let allGrades = []
    for (const subject in this.grades) {
        allGrades.push(...this.grades[subject])
    }
    console.log(`Średnia arytmetyczna ze wszystkich ocen wynosi: ${allGrades.reduce((a, b) => a + b) / allGrades.length}`)
}

const student1 = new Student('Jan', 'Kowalski')


student1.addGrade('Matematyka', 5)
student1.addGrade('Matematyka', 1)
student1.addGrade('Matematyka', 3)
student1.addGrade('Chemia', 2)
student1.addGrade('Chemia', 4)
student1.addGrade('Chemia', 1)
student1.addGrade('Fizyka', 6)
student1.addGrade('Fizyka', 6)
student1.addGrade('Fizyka', 6)
student1.addGrade('Biologia', 5)
student1.addGrade('Biologia', 4)
student1.addGrade('Biologia', 5)


student1.averageFromAllSubjects()
student1.subjectAverage('Chemia')
