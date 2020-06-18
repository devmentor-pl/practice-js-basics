function Student(FirstName, LastName) {
    this.firstName = FirstName;
    this.LastName = LastName;
    this.grades = {};
    this.avg = {};
}





Student.prototype.addGrades = function (subject, grade) {
    console.log(this.firstName, this.LastName)




}


const student1 = new Student('Ola', 'Kowalska');

student1.addGrades('math', 1)
student1.addGrades('polish', 6)
student1.addGrades('sport', 5)


console.log(student1)
student1.addGrades();