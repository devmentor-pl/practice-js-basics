//konstruktor

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}

//prototypy

Student.prototype.addGrade = function(subject, grade) {
    if (typeof this.grades[subject] === "undefined") {
        this.grades[subject] = [];
        
    }

    this.grades[subject].push(grade);
};

