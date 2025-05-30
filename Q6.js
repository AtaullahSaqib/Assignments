// Question 6: Text Processing

// const words = ["javascript", "array", "method", "function", "variable", "object", "string"];

// a) Find the longest word
// b) Calculate the total number of characters across all words
// c) Count how many words contain the letter 'a'
// d) Create a single string with all words joined by commas
// e) Find the word that comes first alphabetically -->

const words = ["javascript", "array", "method", "function", "variable", "object", "string"];

// (A)

function word(arr) {
  return arr.reduce((longest, word) => word.length > longest.length ? word : longest)
}
const longestWord = word(words)
console.log(longestWord)

// (B)

function totalChar(arr) {
  return arr.reduce((sum, word) => sum + word.length, 0)
}

const totalChars = totalChar(words)
console.log(totalChars)

// (C)

function countWords(arr) {
  return arr.filter(word => word.includes('a')).length
}

const wordsWithA = countWords(words)
console.log(wordsWithA)

// (D)

function word(arr) {
  return arr.join(',')
}

const joinedWords = word(words)
console.log(joinedWords)

// (E)

function find(arr) {
  return arr.sort()[0];
}

const firstWordSort = find(words)
console.log(firstWordSort)