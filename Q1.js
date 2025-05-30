// Question 1: Student Grade Processing

// Given an array of student objects:

// ```jsx
// const students = [
//   { name: "Alice", grade: 85, subject: "Math" },
//   { name: "Bob", grade: 92, subject: "Science" },
//   { name: "Charlie", grade: 78, subject: "Math" },
//   { name: "Diana", grade: 96, subject: "English" },
//   { name: "Eve", grade: 88, subject: "Science" }
// ];

// a) Create a new array containing only the student names
// b) Create a new array with grade percentages converted to letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)
// c) Add a "status" property to each student object ("Excellent" for 90+, "Good" for 80-89, "Average" for 70-79, "Needs Improvement" for <70)

const students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 92, subject: "Science" },
  { name: "Charlie", grade: 78, subject: "Math" },
  { name: "Diana", grade: 96, subject: "English" },
  { name: "Eve", grade: 88, subject: "Science" }
];

//(A)

const studentsName = students.map((student) => student.name);
console.log(studentsName)

//(B)

const studentsGrade = students.map((student) => {
    if (student.grade >= "90") return "A";
    if (student.grade >= "80") return "B";
    if (student.grade >= "70") return "C";
    if (student.grade >= "60") return "D";
    return "F"
})
console.log(studentsGrade)

//(C)

function studentStatus(arr){
    return arr.map(student => ({
        student, 
        status: student.grade >= 90 ? "Excellent" :
        student.grade >= 80 ? "Good" :
        student.grade >= 70 ? "Average" : "Needs Improvement"
    }));
}
const addStatus = studentStatus(students);
console.log(addStatus)
// console.log(students)