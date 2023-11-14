function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {};

  this.addGrade = function(subject, mark) {
    if (typeof this.grades[subject] === 'undefined') {
      this.grades[subject] = [];
    }

    this.grades[subject].push(mark);
  }

  this.getAverageGrade = function(subjectName) {
    if (subjectName) {
      const arr = this.grades[subjectName];
       return arr.reduce((prev, curr) => curr = prev + curr) / arr.length
    }

    const arrOfGrades = Object.values(this.grades);
    let sum = 0;
    let count = 0;

    for(const subArray of arrOfGrades) {
      for (const num of subArray) {
        sum += num;
        count++;
      }
    }

    return sum / count
  }
}


const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 5);
student.addGrade('maths', 6);
student.addGrade('programming', 2);
student.addGrade('programming', 6);
student.addGrade('history', 5);
const avgMath = student.getAverageGrade('maths');
const avg = student.getAverageGrade();

console.log(student.grades['programming']);
console.log(avgMath);
console.log(avg);