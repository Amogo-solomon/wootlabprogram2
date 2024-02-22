const students = [
 { name: 'Tobi', score: 50 },
 { name: 'Bob', score: 40 },
 { name: 'Michael', score: 70},
 { name: 'Jude', score: 30},
 { name: 'Martins', score: 80}
];

const studentNames = students.map(student => student.name);

console.log("output for student name only", studentNames);

// function using filter to find students who scored above a certain threshold.
function findScoreAboveThreshold(students, threshold) {
// Filter students who scored above the threshold
const filteredStudents = students.filter(student => student.score > threshold);

// Calculate the total score of filtered students using reduce
const totalScore = filteredStudents.reduce((acc, student) => acc + student.score, 0);

// Calculate the average score
const averageScore = totalScore / filteredStudents.length;

return averageScore;
}

// Test the function
const threshold = 40;
const averageScoreAboveThreshold = findScoreAboveThreshold(students, threshold);
console.log("Avergae score of students who scored above", threshold + ":", averageScoreAboveThreshold);