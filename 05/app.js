function Student(initFirstName, initLastName) {
    this.FirstName = initFirstName;
    this.LastName = initLastName;
    this.grades = {}
}

const student = new Student("Ada", "Zalewska")

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    
    this.grades[subject].push(grade);
}

student.addGrade('math', 4);
student.addGrade('math', 3)
student.addGrade('JS', 2)

console.log(student)

// nie umiem sobie poradzic do konca z tym zadaniem, ale za bardzo utknęłam. Chciałabym do jego rozwiązania wrócić na spotkaniu we wtorek