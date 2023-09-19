function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}

Student.prototype.addGrade =  function(subject, grade){
    if (typeof this.grades[subject]==='undefined')   {
        this.grades[subject]=[];
    }
    if ((grade>0)&&(grade<7)) { 
        this.grades[subject].push(grade);
        return true;
    } 
    return false;
};

Student.prototype.getAverage = function(subject){
    
    let arr_grades = []; 

    if (typeof subject === 'undefined'){
        for (const key in this.grades){
            const temp = arr_grades.concat(this.grades[key]);
            arr_grades = temp;
        }
    }
    else{

        if (typeof this.grades[subject]!=='undefined'){
            arr_grades = this.grades[subject];
        }
        else{
            return false;
        }
    }

    const sum = arr_grades.reduce(function(total, num){ return total+=num},0);
    const qty = arr_grades.length;

    if (qty!==0) return sum / qty;

    return false;

};

const student = new Student('Jan','Kowalski');

student.addGrade('math',3);
student.addGrade('math',5);
student.addGrade('eng',4);
student.addGrade('eng',5);
student.addGrade('eng',1);
student.addGrade('physics',5);
student.addGrade('physics',7);
student.addGrade('physics',0);
student.addGrade('physics',6);
student.addGrade('physics',5);

console.log(student.firstName+' '+student.lastName);
console.log('Physics '+student.getAverage('physics'));
console.log('English: '+student.getAverage('eng'));
console.log('Math: '+student.getAverage('math'));
console.log('All '+student.getAverage());



