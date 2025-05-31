// Question 11: Inventory Management

// const inventory = [
//   { sku: "A001", name: "Widget A", stock: 150, reorderLevel: 50, category: "Tools" },
//   { sku: "B002", name: "Widget B", stock: 25, reorderLevel: 30, category: "Parts" },
//   { sku: "C003", name: "Widget C", stock: 75, reorderLevel: 40, category: "Tools" },
//   { sku: "D004", name: "Widget D", stock: 10, reorderLevel: 20, category: "Parts" }
// ];

// a) Find items that need reordering (stock <= reorderLevel)
// b) Calculate total stock value by category (assume price = stock * 10 for calculation)
// c) Find the item with the lowest stock percentage relative to reorder level
// d) Create a report showing category, total items, and items needing reorder
// e) Sort items by urgency (how far below reorder level they are)

const inventory = [
  { sku: "A001", name: "Widget A", stock: 150, reorderLevel: 50, category: "Tools" },
  { sku: "B002", name: "Widget B", stock: 25, reorderLevel: 30, category: "Parts" },
  { sku: "C003", name: "Widget C", stock: 75, reorderLevel: 40, category: "Tools" },
  { sku: "D004", name: "Widget D", stock: 10, reorderLevel: 20, category: "Parts" }
];

inventory.sort((a,b) => (b.reorderLevel - b.stock) - (a.reorderLevel - a.stock))
console.log(inventory,"inventory")
// (A)

function find(arr) {
  return arr.filter(item => item.stock <= item.reorderLevel)
}

const stock = find(inventory)
// console.log(stock)

// (B)

const sums = inventory.reduce((acc, item) => {
  const cat = item.category;
  acc[cat] = (acc[cat] || 0) + item.stock
  return acc
}, {})
const stockValue = Object.keys(sums).map(cat => ({
  [cat]: sums[cat] * 10
})).reduce((obj, item) => ({ obj, item }), {})
console.log(stockValue)

// (C)

function lowPerc(arr) {
  return arr.reduce((lowest, item) => {
    const percent = item.stock / item.reorderLevel
    const lowestPercent = lowest.stock / lowest.reorderLevel
    return percent < lowestPercent ? item : lowest
  })
}

const lowestPercent = lowPerc(inventory)
console.log(lowestPercent)

// (D)

const reorderItems = inventory.filter(item => item.stock <= item.reorderLevel)
const categories = [...new Set(inventory.map(item => item.category))]
const report = categories.map(category => ({ 
  category,
  totalItems: inventory.filter(item => item.category === category).length,
  reorderCount: reorderItems.filter(item => item.category === category).length
}));
console.log("REPORT!", report)


// (E)

function sortByUrgency(arr) {
  return [...arr].sort((a, b) => (a.stock - a.reorderLevel) - (b.stock - b.reorderLevel))
}

const urgentItems = sortByUrgency(inventory)
console.log(urgentItems)