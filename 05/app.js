function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}

Student.prototype.addGrade = function(subject, grade) {

    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    } else {
        this.grades[subject].push(grade);
    }
}

Student.prototype.getAverageGrade = function(subject) {
    if(typeof subject === 'undefined') {
        let sum1 = 0;
        let num = 0;

        for(const key in this.grades) {
            const arr = this.grades[key];
            sum1 += arr.reduce(function(a, b) {
                return a + b;
            }, 0);
            num += arr.length;
            num++;
            const result = sum1 / num;
            console.log('The average of all subjects is:' , result);
            return result;
        }
    } else {
        const grades = this.grades[subject];
        let sum2 = 0;
        let num2 = 0;

    
    }
}

const student1 = new Student('Genowefa', 'Pigwa')

student1.addGrade('maths', 4);
student1.addGrade('polish', 6);
student1.addGrade('english', 3);
student1.addGrade('PE', 3);
student1.addGrade('IT', 6);

console.log(student1.getAverageGrade());
