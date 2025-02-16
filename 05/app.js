class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = {};
    }

    // Static method to normalize subject names
    static normalizeSubject(subject) {
        return subject.trim().toLowerCase() //this could be adjusted further if we decide to handle spaces in subject names differently, perhaps by adding: .replace(/\s+/g, '_')
    }

    // Static method to compute the average of an array of numbers.
    static computeAverage(arr) {
        if (!Array.isArray(arr) || arr.length === 0) return null;

        const sum = arr.reduce((acc, num) => acc + num, 0);

        return sum / arr.length;
    }

    addGrade(subject, grade) {
        if (typeof subject !== 'string' || subject.trim() === '') {
            throw new Error('Subject must be a non-empty string');
        }
        if (typeof grade !== 'number' || isNaN(grade)) {
            throw new Error('Grade must be a valid number');
        }

        const subjectKey = Student.normalizeSubject(subject);

        if (!this.grades[subjectKey]) {
            this.grades[subjectKey] = [];
        }

        this.grades[subjectKey].push(grade);
    }

    getAverageGrade(subject) {
        const gradesToCalculate = (typeof subject === 'string' && subject.trim())
            ? (this.grades[Student.normalizeSubject(subject)] || [])
            : Object.values(this.grades).flat();

        return Student.computeAverage(gradesToCalculate);
    }
}

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('english', 6);

const avgMath = student.getAverageGrade('maths');
const avgEnglish = student.getAverageGrade('english');
const overallAvg = student.getAverageGrade();

console.log(student);
console.log('Average Maths:', avgMath);
console.log('Average English:', avgEnglish);
console.log('Overall Average:', overallAvg);