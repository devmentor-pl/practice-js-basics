function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}

Student.prototype.addGrade = function (subject, grade){
     if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
      }
      this.grades[subject].push(grade);
}

Student.prototype.calcGradeAvg= function(subject){
    if(subject !== undefined){
        const grades = this.grades[subject];
        let sum = 0;
        for(i=0; i< grades.length; i++){
            sum+= grades[i];
        }
        return sum/grades.length
    }
    let sum = 0;
    let counter = 0;
    const subjects = Object.keys(this.grades);
    for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < this.grades[subjects[i]].length; j++) {
            sum += this.grades[subjects[i]][j];
            console.log(`i: ${i} ; j: ${j}`)
            console.log(typeof this.grades[subjects[i]][j])
            counter++;
        }
    }
    return sum/counter;
}

const student1 = new Student("Mikolaj","Krzywacz");
student1.addGrade('math',5);
student1.addGrade('math',3);
student1.addGrade('science',4);
student1.addGrade('science',6);
student1.addGrade('science',2);
student1.addGrade('science',3);
console.log('Avg of grades: ', student1.calcGradeAvg('science'));
console.log(student1)