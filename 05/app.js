function Student(initFirstName, initLastName) {
    this.firstName = initFirstName
    thislastName = initLastName
    this.grades = {}
}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }
    this.grades[subject].push(grade)
}

Student.prototype.getAvarageGrade = function(subject) {
    if(subject !== undefined) {
        const gradesNumber = this.grades[subject].length
        const sum = this.grades[subject].reduce((acc, curr) => acc + curr)
        const avarage = sum / gradesNumber
        return avarage
    } else {
        let totalGrades = 0;
        let totalSum = 0;
        for(subj in this.grades) {
            const grades = this.grades[subj].length
            const sum = this.grades[subj].reduce((acc, curr) => acc + curr)
            totalSum += sum;
            totalGrades += grades
        }
        const overallAvarage = totalSum / totalGrades;
        return overallAvarage;
    }
}


const Student1 = new Student("Ala", "Sobota")
Student1.addGrade('math', 5)
Student1.addGrade('math', 5)
Student1.addGrade('math', 4)
Student1.addGrade('english', 4)
Student1.addGrade('biology', 3)
console.log(Student1.getAvarageGrade())
console.log(Student1)

