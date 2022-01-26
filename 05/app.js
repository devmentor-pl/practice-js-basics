function Student(firstName, secondName) {
    this.name = firstName;
    this.surname = secondName;
    this.grades = {}
}

const student1= new Student('John', 'Smith');

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [grade];
    } else {
        this.grades[subject].push(grade);
    }
}

Student.prototype.getAverageGrade = function(subject) {
    if (typeof subject === 'undefined') {
        let avSum = 0;
        const objectItems = Object.keys(this.grades);
        const objectLenght = objectItems.length;
        for(const key in this.grades) {
            const arrLenght = this.grades[key].length;
            const arrElementsSum = this.grades[key].reduce(function(total, num) {
                return total + num;
            }); 
            const arrAv = arrElementsSum/arrLenght;
            avSum += arrAv;
        }
        const totaleAverage = (avSum / objectLenght).toFixed(1);
        return totaleAverage;
    } else {
        let sum = 0;
        const subjectArrLength = this.grades[subject].length;
        for(const key in this.grades[subject]) {
            sum += this.grades[subject][key];
        }
        const subjectAverage = (sum / subjectArrLength).toFixed(1);
        return subjectAverage;
    }
}