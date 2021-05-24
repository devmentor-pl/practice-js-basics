function Student( initFirstName , initLastName ) {

    this.firstName = initFirstName,
    this.lastName = initLastName,

    this.grades = {
        maths: [4, 6],
        english: [3],
    }
}


Student.prototype.addGrade = function(subject, grades) {


      if(typeof this.grades[subject] === 'undefined') {
          this.grades[subject] = [];
          this.grades[subject].push(grades);

      } else {
          this.grades[subject].push(grades);
      }
}

Student.prototype.getAverageGrade = function(subject) {

    if( !( typeof this.grades[subject] === 'undefined' ) ) {

        let sum = 0;
        for(let i=0; i <= this.grades[subject].length -1; i++) {

            sum = sum + this.grades[subject][i]
        }

        const average = sum / this.grades[subject].length;
        return average;

    }
    else {
        const restOfGrades = [];
        for (const key in this.grades) {

            this.grades[key].forEach( function(element) {
                restOfGrades.push(element);
            });
        }

        const average = restOfGrades.reduce( function(a,b) {
            return a + b;
        })/restOfGrades.length
        return average;
  }
}




const student = new Student('Jan', 'Kowalski');
console.log(student);
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // 4.33

