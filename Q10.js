// ### Question 10: Social Media Analytics

// const posts = [
//   { id: 1, author: "user1", content: "Hello world!", likes: 15, tags: ["greeting", "first"] },
//   { id: 2, author: "user2", content: "JavaScript is awesome", likes: 32, tags: ["programming", "js"] },
//   { id: 3, author: "user1", content: "Learning arrays", likes: 18, tags: ["programming", "learning"] },
//   { id: 4, author: "user3", content: "Good morning!", likes: 8, tags: ["greeting"] }
// ];

// a) Find the most popular post (highest likes)
// b) Get all unique tags used across all posts
// c) Calculate average likes per author
// d) Find posts containing the word "JavaScript" or "programming" in content or tags
// e) Create a leaderboard of authors sorted by total likes

const posts = [
  { id: 1, author: "user1", content: "Hello world!", likes: 15, tags: ["greeting", "first"] },
  { id: 2, author: "user2", content: "JavaScript is awesome", likes: 32, tags: ["programming", "js"] },
  { id: 3, author: "user1", content: "Learning arrays", likes: 18, tags: ["programming", "learning"] },
  { id: 4, author: "user3", content: "Good morning!", likes: 8, tags: ["greeting"] }
];

// (A)

function popular(arr) {
  return arr.reduce((top, post) => post.likes > top.likes ? post : top)
}

const mostPopular = popular(posts)
console.log(mostPopular)

// (B)

// ?...

// (C)

// ?...

// (D)

function find(arr){
  return arr.filter(post =>
    post.content.includes("javascript") ||
    post.content.includes("programming") ||
    post.tags.includes("JavaScript") || 
    post.tags.includes("programming")
  )
}
const techPosts = find(posts)
console.log(techPosts)

// (E)


const newPosts = [
  { id: 1, author: "user1", content: "Hello world!", likes: 15, tags: ["greeting", "first"] },
  { id: 2, author: "user2", content: "JavaScript is awesome", likes: 32, tags: ["programming", "js"] },
  { id: 3, author: "user1", content: "Learning arrays", likes: 18, tags: ["programming", "learning"] },
  { id: 4, author: "user3", content: "Good morning!", likes: 8, tags: ["greeting"] }
];

const authorObj = {}
let modified = newPosts.map((x)=> {
  if(authorObj[x.author]){
      let addedLikes = authorObj[x.author] + x.likes
      x.likes = addedLikes
      authorObj[x.author] =  x
      return
  }else{
    authorObj[x.author] = x
    return x
  }
})
const newAuthorObj = {}
const sorted = Object.keys(authorObj).sort((a,b) => {
  return authorObj[b].likes - authorObj[a].likes
}).map(x => {newAuthorObj[x] = authorObj[x]})

console.log(newAuthorObj,"sorted")



