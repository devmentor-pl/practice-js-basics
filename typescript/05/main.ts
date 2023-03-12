type Subjects = 'math' | 'geo' | 'english';
type Grades = 1 | 2 | 3 | 4 | 5;

interface Student {
	firstName: string;
	lastName: string;
	subjectsAndGrades: { [subjects: string]: Grades };
}

function Student(this: Student, firstName: string, lastName: string) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.subjectsAndGrades = {};
}

Student.prototype.addGrade = function (subject: Subjects, grade: Grades) {
	if (typeof this.subjectsAndGrades[subject] === 'undefined') {
		this.subjectsAndGrades[subject] = [];
	}
	this.subjectsAndGrades[subject].push(grade);
};
Student.prototype.getAvgGrade = function (subject: Subjects) {
	if (typeof subject === 'undefined') {
		const arrayWithGrades = Object.values(this.subjectsAndGrades).reduceRight((acc: number, curr: number) => accumulator.concat(currentValue));
		const avg = arrayWithGrades.reduce((acc: number, curr: number) => acc + curr / arrayWithGrades.length, 0);
		console.log(`Student average: ${avg.toFixed(2)}`);
	}
	if (typeof subject !== 'undefined') {
		const subjectAvg = this.subjectsAndGrades[subject].reduce((acc: number, curr: number) => acc + curr / this.subjectsAndGrades[subject].length, 0);

		console.log(`Student average from ${subject}: ${subjectAvg.toFixed(2)}`);
	}
};
//@ts-ignore
const firstStudent = new Student('bob', 'kevin');
firstStudent.addGrade('math', 5);
firstStudent.addGrade('math', 4);
firstStudent.addGrade('math', 4);
firstStudent.addGrade('english', 4);

firstStudent.addGrade('geo', 5);
firstStudent.addGrade('geo', 5);
firstStudent.getAvgGrade('math');

console.log(firstStudent);
