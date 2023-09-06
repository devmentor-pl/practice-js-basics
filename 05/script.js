function Student(initFirstName, initLastName) {
	this.name = initFirstName
	this.lastName = initLastName
	this.marks = {}
}

// dodanie oceny
Student.prototype.getMark = function (subject, mark) {
	if (typeof this.marks[subject] === 'undefined') {
		this.marks[subject] = []
	}
	this.marks[subject].push(mark)
}

// średnia z przedmiotu
Student.prototype.getAverageGrade = function (subject) {

	if (typeof this.marks[subject] === 'undefined') {
		return 0
	}
	const grades = this.marks[subject]

	const sum = grades.reduce(function(acc, curr){
		return acc + curr
	}, 0)

	return sum / grades.length
}


Student.prototype.avgAll = function () {
    let totalMarks = 0;
    let totalSubjects = 0;

    for (const subject in this.marks) {
        const subjectMarks = this.marks[subject];
        const subjectTotal = subjectMarks.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);
        totalMarks += subjectTotal;
        totalSubjects += subjectMarks.length;
    }

    if (totalSubjects === 0) {
        return 0;
    }

    return totalMarks / totalSubjects;
};


// 	for(const subject in this.marks) 
// 		const subjectMarks = this.marks[subject];
// 		for(const index  in subjectMarks ) {
// 			const mark = subjectMarks[index];
// 			console.log(mark);
// 		}


		
// 	}
// }
const student1 = new Student ('Tomasz', 'Kowalski')
student1.getMark('maths', 5)
student1.getMark('maths', 3)
student1.getMark('english', 2)
student1.getMark('english', 1)
student1.getMark('english', 6)

console.log(student1.avgAll());
console.log(student1.getAverageGrade("english"));


