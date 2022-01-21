function Student(firstName, secondName) {
    this.name = firstName;
    this.surname = secondName;
    this.grades = {}
}

const student1= new Student('John', 'Smith');

// ----------------------------------------------
Student.prototype.addGrades = function(subject, grade){
    if(this.grades[subject] == undefined){
        this.grades[subject] = [grade];
    } else {
        this.grades[subject].push(grade);
    }
}

// ----------------------------------------------
Student.prototype.calcSubjectAverage = function(subject) {
    if(Object.keys(this.grades).length !== 0){
        if(this.average===undefined) {
            this.average = {}
        }
        this.average[subject];

        function sum(sum,obj) {
            sum+=obj
            return sum;
        }

        this.average[subject]=this.grades[subject].reduce(sum)/(this.grades[subject].length).toFixed(2);
    } else {
        console.log('Oceny z tego przedmiotu nie zostaly wprowadzone!')
    }
 }

// ----------------------------------------------
Student.prototype.calcTotalAverage = function() {
    if(this.average!==undefined) {
        let total = 0;
        
        for(const key in this.average) {
            total+=this.average[key];
        }
        
        return this.totaleAverage = parseFloat((total/Object.keys(this.average).length).toFixed(2));
    } else {
        console.log('Srednie z poszczegolnych przedmiotow nie istnieja !');
    }
}