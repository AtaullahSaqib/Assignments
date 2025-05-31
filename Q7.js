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

let a = { }
let dept = employees.forEach(groupby) 
  function groupby(employee){
    if(!a[employee.department]) {
      a[employee.department] = [employee]
    } else {a[employee.department].push(employee)}
    
  }
console.log(a)
// (B)

function getEmployees(arr) {
  return arr.filter(employee => employee.projects.length > 2)
}

const busyEmployees = getEmployees(employees)
console.log(busyEmployees)

// (C)

function avgSalary(arr) {
  const box = arr.reduce((acc, person) => {
    const dept = person.department;
    acc[dept] = acc[dept] || { sum: 0, count: 0 }
    acc[dept].sum += person.salary
    acc[dept].count++;
    return acc
  }, {})
  return Object.keys(box).map(dept => ({
    [dept]: box[dept].sum / box[dept].count
  })).reduce((obj, item) => ({ obj, item }), {})
}
console.log(avgSalary(employees))


// (D)

function uniqueProject(arr) {
  return [new Set(arr.map(person => person.projects).flat())]
}
console.log(uniqueProject(employees))

// (E)

const depts = [...new Set(employees.map(person => person.department))]
const topEarners = depts.map(dept => ({ 
  [dept]: employees.filter(person => person.department === dept) 
                   .reduce((top, person) => person.salary > top.salary ? person : top)
})).reduce((obj, item) => ({ obj, item }), {})
console.log(topEarners)
