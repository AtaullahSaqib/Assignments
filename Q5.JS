// Question 5: Shopping Cart Calculations

// const cartItems = [
//   { name: "T-shirt", price: 25, quantity: 2 },
//   { name: "Jeans", price: 60, quantity: 1 },
//   { name: "Sneakers", price: 80, quantity: 1 },
//   { name: "Hat", price: 15, quantity: 3 }
// ];

// a) Calculate the total cost of all items
// b) Find the most expensive single item
// c) Count the total number of items in the cart
// d) Create a summary object with totalItems, totalCost, and averageItemPrice
// e) Find the item with the highest total value (price × quantity)

const cartItems = [
  { name: "T-shirt", price: 25, quantity: 2 },
  { name: "Jeans", price: 60, quantity: 1 },
  { name: "Sneakers", price: 80, quantity: 1 },
  { name: "Hat", price: 15, quantity: 3 }
];

// (A)

function totalCost(arr){
  return arr.reduce((total, item) => total + item.price * item.quantity, 0)
}
const calculate = totalCost(cartItems)
console.log(calculate)

// (B)

function expensiveItem(arr) {
  return arr.reduce((Item, item) => item.price > Item.price ? item : Item)
}

const mostExpensive = expensiveItem(cartItems)
console.log(mostExpensive)

// (C)

function totalItems(arr){
  return arr.reduce((total, item) => total + item.quantity, 0)
}
const total = totalItems(cartItems)
console.log(total)

// (D)

function summary(arr) {
  const totalItems = arr.reduce((sum, item) => sum + item.quantity, 0)
  const totalCost = arr.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const averageItemPrice = totalCost / totalItems
  return { totalItems, totalCost, averageItemPrice }
}

const cartSummary = summary(cartItems)
console.log(cartSummary)

// (E)

// ?...