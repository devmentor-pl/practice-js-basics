function Student(name,surname){
    this.name = name;
    this.surname = surname;
    this.grades = {};
    this.gradespro = {}
}
var stud1 = new Student("matt","kid");
//var subject="math";
stud1.grades.math = [2,3,4];
stud1.grades.chemistry = [4];
stud1.grades.english = [3];

Student.prototype.addGrade = function (subject, grade){
   this.grades[subject]=[grade];
}

stud1.addGrade("physics",4);

"ssaasa";

stud1.gradespro.networks = {};
stud1.gradespro.networks.project = [2, 5, 5];
stud1.gradespro.networks.laboratory = [3, 4.5, 5];


        