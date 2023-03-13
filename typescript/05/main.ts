type Grades = 1 | 2 | 3 | 4 | 5 | 6;

interface Student {
	firstName: string;
	lastName: string;
	subjectsAndGrades: { [Subjects:string]: Grades };
}

const calc = (array: Grades[], length: number) => {
	return array.reduce((acc: number, curr: number) => acc + curr / length, 0);
};

function Student(this: Student, firstName: string, lastName: string) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.subjectsAndGrades = {};
}

Student.prototype.addGrade = function (subject: string, grade: Grades) {
	if (typeof this.subjectsAndGrades[subject] === 'undefined') {
		this.subjectsAndGrades[subject] = [];
	}
	this.subjectsAndGrades[subject].push(grade);
};
Student.prototype.getAvgGrade = function (subject: string) {
	if (typeof subject === 'undefined') {
		const arrayWithGrades = <Grades[]>(
			Object.values(this.subjectsAndGrades).reduceRight((previousValue: any, currentValue) => previousValue.concat(currentValue))
			// w typie previousvalue dałem any, mimo, że to jest zła praktyka, ale nie wiem również jak rozwiązać ten problem
			// metoda reduceRight jako parametry ma typy: unknown i nie wiem co tutaj generuje błąd
		);

		const avg = calc(arrayWithGrades, arrayWithGrades.length);
		console.log(`Student average: ${avg.toFixed(2)}`);
	}
	if (typeof subject !== 'undefined') {
		const subjectAvg = calc(this.subjectsAndGrades[subject], this.subjectsAndGrades[subject].length);
		console.log(`Student average from ${subject}: ${subjectAvg.toFixed(2)}`);
	}
};
// @ts-ignore
const firstStudent = new Student('bob', 'kevin');
firstStudent.addGrade('math', 5);
firstStudent.addGrade('math', 5);
firstStudent.addGrade('english', 4);

firstStudent.addGrade('geo', 5);
firstStudent.addGrade('geo', 5);
firstStudent.getAvgGrade();

console.log(firstStudent);
