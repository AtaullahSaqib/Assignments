// Question 2: E-commerce Product Catalog

// Given this product array:

// const products = [
//   { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
//   { id: 2, name: "Book", price: 15, category: "Education", inStock: false },
//   { id: 3, name: "Phone", price: 699, category: "Electronics", inStock: true },
//   { id: 4, name: "Desk", price: 299, category: "Furniture", inStock: true }
// ];

// a) Create a new array with prices converted to include a 10% tax
// b) Generate an array of product summaries in the format: "Product: [name] - $[price] ([category])"
// c) Create a new array where each product has a "discountPrice" property (20% off original price)

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Book", price: 15, category: "Education", inStock: false },
  { id: 3, name: "Phone", price: 699, category: "Electronics", inStock: true },
  { id: 4, name: "Desk", price: 299, category: "Furniture", inStock: true }
];

//(A)

function tax(arr){
  return arr.map(product => product.price * 1.10)
}
const addedTax = tax(products)
console.log(addedTax)

//(B)

function productSummaries(arr){
  return arr.map(product => `Product: ${product.name} - $${product.price} (${product.category})`);
}
const productSummary = productSummaries(products);
console.log(productSummary)

//(C)

function discount(arr){
  return arr.map(product => ({
    product, 
    DiscountPrice: product.price * 0.8
  }));
}
const finalPrice = discount(products)
console.log(finalPrice)