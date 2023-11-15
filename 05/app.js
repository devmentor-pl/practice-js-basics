function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}
const student1 = new Student('jan', 'kowalski');
Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined'){
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject) {    
    let avg = 0;
    if(typeof subject === 'undefined') {
        const gradesArr = [];
        for(const key in this.grades) {
            const arr = this.grades[key];

            arr.forEach(function(item){
                gradesArr.push(item);
            });
        }
        console.log(gradesArr);
        const sum = gradesArr.reduce(function(acc, curr){
            return acc + curr;
        });
        return sum / gradesArr.length;
    } else {
        let arrLength = this.grades[subject].length;
        this.grades[subject].forEach(function(elem){
            avg += elem;
        });
         return avg / arrLength;
    }
}

student1.addGrade('maths', 4);
student1.addGrade('maths', 5);
student1.addGrade('maths', 4);
student1.addGrade('english', 5);
console.log(student1.getAverageGrade());
console.log(student1.getAverageGrade('maths'));
console.log(student1.getAverageGrade('english'));
console.log(student1);