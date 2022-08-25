function Student (name, surname){
    this.firstName = name;
    this.lastName = surname;
    this.grades = {}
}

Student.prototype.addGrade = function (subject, grade){
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
   this.grades[subject].push(grade);
}
Student.prototype.getAverageGrade = function(subject){
    let sum = 0;
    let counter = 0;
    if(typeof subject === 'undefined'){
        for(const key in this.grades){
            this.grades[key].forEach(element => sum = sum + element);
            counter = counter + this.grades[key].length;
        }
        console.log(sum/counter);
    }else{
        this.grades[subject].forEach(element => sum = sum + element  )
        counter = counter + this.grades[subject].length;
        console.log(sum/counter);
    }
}
const student1 = new Student('Joe', 'Huberman');
student1.addGrade('maths', 4);
student1.addGrade('maths', 4);
student1.addGrade('maths', 2);
student1.addGrade('spanish', 3);
student1.addGrade('spanish', 5);
student1.addGrade('english', 4);
student1.addGrade('english', 6);
const avgEng = student1.getAverageGrade('english');
const avg = student1.getAverageGrade();