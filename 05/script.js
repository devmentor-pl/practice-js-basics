function Student(initFirstName, initLastName){
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
    
}

Student.prototype.newGrade = function(subject, grade){
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}


Student.prototype.getAverageGrade = function(subject){
        let array = []
        if (typeof subject === 'undefined') {
            for (const key in this.grades){
                const subjectGrades = this.grades[key]
        
                subjectGrades.forEach(function(item){
                    array.push(item)
                })
                   
            }
        } else {
            array = this.grades[subject]
        }

        let sum = 0
        for(i = 0; i<array.length; i++ ){
            sum = sum + array[i] 
    }
        let avg = sum / array.length
        return avg
 
}


const student = new Student('Joanna', 'Wierzbicka');
console.log(student);
student.newGrade('chemistry', 5);
student.newGrade('chemistry', 6);
student.newGrade('biology', 3);
student.newGrade('biology', 4);
student.newGrade('english', 5);
student.newGrade('english', 2);
student.newGrade('math', 4);
student.newGrade('math', 2);
student.newGrade('history', 1);
student.newGrade('history', 1);


student.getAverageGrade('chemistry')
student.getAverageGrade('biology')
student.getAverageGrade('english')
student.getAverageGrade('math')
student.getAverageGrade('history')
student.getAverageGrade()
