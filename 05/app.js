function Student(name, lastname){
    this.firstName = name;
    this.lastName = lastname;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade){
    if(typeof this.grades[subject] === 'undefined'){
    this.grades[subject] = [];
    };
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject) {
    // suma ocen
    let result = 0;
    if(subject) {
        this.grades[subject].forEach(element => {
            result+=element;
        });
        // średnia ocen z przedmiotu
        result = result/this.grades[subject].length;
        console.log(`Średnia ocen z ${subject} wynosi:`);
    } else if(!subject){
        // liczba wszystkich ocen
        let numberOfGrades = 0;
        for(const key in this.grades){
            numberOfGrades+=this.grades[key].length;
            result += this.grades[key].reduce(function(a, b){
                return a+b;
            });
            console.log('Liczba ocen z ' + key + ' wynosi ' + this.grades[key].length);    
        }
        // średnia wszystkich ocen
        result = result/numberOfGrades;
        console.log('Średnia wszystkich ocen wynosi:');     
    }
    return result;
};

const student = new Student('Jan', 'Kowalski');