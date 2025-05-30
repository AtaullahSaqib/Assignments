// Question: 9: Nested Array Operations

// const orders = [
//   {
//     id: 1,
//     customer: "John",
//     items: [
//       { product: "Laptop", price: 1000, quantity: 1 },
//       { product: "Mouse", price: 25, quantity: 2 }
//     ]
//   },
//   {
//     id: 2,
//     customer: "Jane",
//     items: [
//       { product: "Phone", price: 800, quantity: 1 },
//       { product: "Case", price: 20, quantity: 1 }
//     ]
//   }
// ];

// a) Calculate the total value for each order
// b) Find all unique products across all orders
// c) Get the customer who spent the most money
// d) Create a flat array of all items from all orders
// e) Count the total quantity of all items sold

const orders = [
  {
    id: 1,
    customer: "John",
    items: [
      { product: "Laptop", price: 1000, quantity: 1 },
      { product: "Mouse", price: 25, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: "Jane",
    items: [
      { product: "Phone", price: 800, quantity: 1 },
      { product: "Case", price: 20, quantity: 1 },
      { product: "Mouse", price: 25, quantity: 2 }
    ]
  }
];

// (A)

function totals(arr) {
  return arr.map(order => ({
    id: order.id,
    customer: order.customer,
    total: order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }))
}

const orderTotals = totals(orders);
console.log(orderTotals)

// (B)

function products(arr) {
  return arr.map(order => order.items.map(item => item.product))
}

const uniqueProducts = products(orders)
console.log(uniqueProducts)

// (C)
console.log(orderTotals.map(x => x.total))
const highestCustomer = orderTotals.reduce((max, item) => max.total < item.total ? max = item : max = max , orderTotals[0]) 
console.log(highestCustomer, "Highest")


// (D)

function getAll(arr) {
  return arr.map(order => order.items).flat()
}

const allItems = getAll(orders)
// console.log(allItems)

//(E)

function sold(arr){
    return arr.map(order => order.items.reduce((sum, item) => sum + item.quantity, 0))
}
const itemSold = sold(orders)
// console.log(itemSold)



let product =  { product: "Phone", price: 800, quantity: 1 }
let entry = Object.entries(product)
console.log(entry)
console.log(Object.fromEntries(entry))
