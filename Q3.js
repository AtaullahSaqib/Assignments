// Question 3: User Management System

// const users = [
//   { id: 1, username: "john_doe", age: 25, isActive: true, role: "user" },
//   { id: 2, username: "jane_smith", age: 32, isActive: false, role: "admin" },
//   { id: 3, username: "bob_wilson", age: 19, isActive: true, role: "user" },
//   { id: 4, username: "alice_brown", age: 28, isActive: true, role: "moderator" },
//   { id: 5, username: "charlie_davis", age: 35, isActive: false, role: "user" }
// ];

// a) Find all active users over 21 years old
// b) Check if there are any inactive admin users
// c) Find the first user with "moderator" role
// d) Get all usernames of active users
// e) Check if all users have usernames longer than 5 characters

 const users = [
  { id: 1, username: "john_doe", age: 25, isActive: true, role: "user" },
  { id: 2, username: "jane_smith", age: 32, isActive: false, role: "admin" },
  { id: 3, username: "bob_wilson", age: 19, isActive: true, role: "user" },
  { id: 4, username: "alice_brown", age: 28, isActive: true, role: "moderator" },
  { id: 5, username: "charlie_davis", age: 35, isActive: false, role: "user" }
];

// (A)

const found = users.filter(user => user.age > 21 & user.isActive);
console.log(found)

// (B)

const check = users.some(user => !user.isActive && user.role === "admin" );
console.log(check)

// (C)

const moderator = users.find(user => user.role === "moderator");
console.log(moderator)

// (D)

const activeUsers = users.map(user => user.isActive && user.username);
console.log(activeUsers)

// (E)

const character = users.filter(user => user.username.length > 5)
console.log(character)