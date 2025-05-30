// Question 8: Data Cleanup and Validation

// const rawData = [
//   "  Alice Johnson  ", "bob@email.com", "", "Charlie Brown", null, "diana.smith@test.co",
//   "   ", "Eve Wilson", undefined, "frank.miller@domain.org", "Grace Lee"
// ];

// a) Remove all empty, null, or undefined values
// b) Trim whitespace from all remaining strings
// c) Separate email addresses from regular names
// d) Sort names alphabetically (excluding emails)
// e) Validate that all emails contain '@' and '.'

const rawData = [
  "  Alice Johnson  ", "bob@email.com", "", "Charlie Brown", null, "diana.smith@test.co",
  "   ", "Eve Wilson", undefined, "frank.miller@domain.org", "Grace Lee"
];

// (A)

function invalid(arr) {
  return arr.filter(x => x && x.trim() !== "")
}

const validData = invalid(rawData)
console.log(validData)

// (B)

function trim(arr) {
  return arr.map(x => x.trim())
}

const trimmedData = trim(validData)
console.log(trimmedData)

// (C)

function separate(arr) {
  return {
    emails: arr.filter(item => item.includes("@")),
    names: arr.filter(item => !item.includes("@"))
  };
}

const separated = separate(trimmedData);
console.log(separated)

// (D)

function sortNames(arr) {
  return arr.sort()
}

const sortedNames = sortNames(separated.names)
console.log(sortedNames)