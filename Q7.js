// Question 7: Employee Performance Tracking

// const employees = [
//   { name: "John", department: "IT", salary: 75000, projects: ["A", "B"] },
//   { name: "Sarah", department: "Marketing", salary: 65000, projects: ["C"] },
//   { name: "Mike", department: "IT", salary: 80000, projects: ["A", "D", "E"] },
//   { name: "Lisa", department: "HR", salary: 60000, projects: ["B", "C"] },
//   { name: "Tom", department: "Marketing", salary: 70000, projects: ["D"] }
// ];

// a) Group employees by department (return an object with department names as keys)
// b) Find employees working on more than 2 projects
// c) Calculate the average salary by department
// d) Get a list of all unique projects across all employees
// e) Find the highest-paid employee in each department

const employees = [
  { name: "John", department: "IT", salary: 75000, projects: ["A", "B"] },
  { name: "Sarah", department: "Marketing", salary: 65000, projects: ["C"] },
  { name: "Mike", department: "IT", salary: 80000, projects: ["A", "D", "E"] },
  { name: "Lisa", department: "HR", salary: 60000, projects: ["B", "C"] },
  { name: "Tom", department: "Marketing", salary: 70000, projects: ["D"] }
];

// (A)

// ?....

// (B)

function getEmployees(arr) {
  return arr.filter(employee => employee.projects.length > 2)
}

const busyEmployees = getEmployees(employees)
console.log(busyEmployees)

// (C)

// ?...

// (D)

