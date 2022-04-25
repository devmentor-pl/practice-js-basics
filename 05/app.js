function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.avgSubject = function(subject) {
    if(typeof this.grades[subject] === 'undefined'){
        return 0;
    }
    let avg = 0;
    let avgSubject = 0;
    for(let i = 0; i<this.grades[subject].length; i++) {
        avg += this.grades[subject][i];
    }
    avgSubject = avg / this.grades[subject].length;
    return avgSubject;
}

Student.prototype.avgGlobal = function(subject) {
    if(typeof subject === 'undefined'){
        const grades = []
        for(const key in this.grades) {
            const arr = this.grades[key];
        
            arr.forEach(function(item){
                grades.push(item)
            })
        }
    let avg = 0;
    let avgGlobal = 0;
    for(let i = 0; i<grades.length; i++) {
        avg += grades[i];
    }
    avgGlobal = avg / grades.length;
    return avgGlobal;
    }
}


const student1 = new Student('Jan', 'Nowak');
student1.addGrade('maths', 5);
student1.addGrade('maths', 3);
student1.addGrade('maths', 5);
student1.addGrade('english', 4);
student1.addGrade('english', 3);
student1.addGrade('english', 4);
const avgMath = student1.avgSubject('maths');
const avgEnglish = student1.avgSubject('english');
const avgGlobal = student1.avgGlobal();

console.log(student1.grades);
console.log(avgMath, avgEnglish);
console.log(avgGlobal);