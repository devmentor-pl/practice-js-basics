function Student(name, surname){
    this.name = name;
    this.surname = surname;
    this.grades ={};
}

Student.prototype.addGrade = function(subject, grade){
    if(typeof this.grades[subject] === "undefined"){
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject){
    function countAvg(gradesArray){
        return (gradesArray.reduce((a,b)=>a+b) / gradesArray.length).toFixed(2);
    }

    let avg;
    if(typeof subject !== "undefined" && this.grades[subject]){
        avg = countAvg(this.grades[subject]);
        console.log(`Średnia ocen z ${subject} to: ${avg}.`)
    } else if (typeof subject === "undefined"){
        // console.log("Every grades: ",this.grades);
        const allGradesArray = [];
        for (const key in this.grades) {
            (this.grades[key]).forEach(element => allGradesArray.push(element));
        }
        // console.log("All grades array: ",allGradesArray);
        avg = countAvg(allGradesArray);
        console.log(`Średnia wszystkich ocen to: ${avg}.`)
    } else{
        console.log("Wprowadź interesujący Cię przedmiot, bądź pozostaw pusty parametr.")
    }
    return avg;
}

const student = new Student("Jan", "Kowalski");
student.addGrade("maths", 5);
student.addGrade("maths", 6);
student.addGrade("english", 5);
student.addGrade("polish", 4);
student.addGrade("polish", 3);
student.addGrade("polish", 5);

student.getAverageGrade("maths");
student.getAverageGrade();

console.log(student);