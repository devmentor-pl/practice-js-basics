
function Student (name, surname) {
        this.name = name;
        this.surname = surname;
        this.grades = {};
}

Student.prototype.addSubject = function (subject) {
        if (typeof this.grades[subject] === 'undefined')
                return this.grades[subject] =[]
}

Student.prototype.addRating = function (num, subject) {
        this.grades[subject].push(num);
}

Student.prototype.averageOfSubject = function (subject) {
        let result = 0;
        subject = this.grades[subject];
        subject.map(item => {
                const grade = parseInt(item);
                result = grade + result
                
        });
        return result / subject.length;
}
Student.prototype.averageOfAllSubjects = function () {
        let result = 0;
        let length;
        let x = 0;
        for(let key in this.grades) {
                length = [this.grades[key].length].map(item => x = x + item)
                this.grades[key].map(item => {
                        item = parseInt(item);
                        result = result + item
                        result
                         })
                

        }
        return result / length
        
        
}







const student1 = new Student ('Karol', 'Nowak');
student1.addSubject('maths');
student1.addSubject('history');
student1.addRating('6', 'maths');
student1.addRating('3', 'maths');
student1.addRating('2', 'maths');
student1.addRating('4', 'history');
student1.addRating('3', 'history');
console.log(student1.averageOfSubject('maths'));
console.log(student1.averageOfAllSubjects());
console.log(student1);





