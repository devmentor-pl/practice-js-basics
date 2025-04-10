function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.grades = {};
};

Student.prototype.addGrade = function(sub, grade){
    if(typeof this.grades[sub] === "undefined"){
        this.grades[sub] = [];
    }
    this.grades[sub].push(grade);
};

Student.prototype.getAverageGrade = function(sub){
    if(typeof sub === "undefined"){
        // liczenie średniej arytmetycznej dla wszystkich przedmiotów
        
        const grades = [];
        for(const key in this.grades){
            const arr = this.grades[key];
            arr.forEach(element => {
                grades.push(element);
            });
        }

        const sum = grades.reduce(function(acc, curr){ return acc + curr},0)
        return sum / grades.length;
    }
    if(typeof this.grades[sub] === "undefined" && typeof sub !== "undefined"){
        // zwraca 0 jeżeli podany przedmiot nie istnieje
        return 0;
    }

    // średnia arytmetyczna dla konkretnego przedmiotu
    const avg = this.grades[sub].reduce(function(acc, curr){return acc + curr},0);
    return avg / this.grades[sub].length;
};


const student1 = new Student("Anna", "Kowalska");
student1.addGrade("Math", 4);
student1.addGrade("Math", 5);
student1.addGrade("Math", 6);
student1.addGrade("Polish", 6);
student1.addGrade("Polish", 6);
student1.addGrade("Polish", 1);

console.log(student1.getAverageGrade("Math"));