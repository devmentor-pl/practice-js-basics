//konstruktor

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}

//prototypy

Student.prototype.addGrade = function(subject, grade) {
    if (subject.trim() === '') {
        console.log('Name of subject')
        return
    }

    if
}