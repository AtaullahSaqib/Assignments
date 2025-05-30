// Question 4: Sales Data Analysis

// const salesData = [
//   { month: "Jan", sales: 15000, region: "North" },
//   { month: "Feb", sales: 18000, region: "South" },
//   { month: "Mar", sales: 22000, region: "North" },
//   { month: "Apr", sales: 19000, region: "East" },
//   { month: "May", sales: 25000, region: "West" },
//   { month: "Jun", sales: 21000, region: "South" }
// ];

// a) Filter months where sales exceeded $20,000
// b) Find the first month where sales were below $20,000
// c) Check if any region had sales above $24,000
// d) Verify if all months had sales above $10,000

const salesData = [
  { month: "Jan", sales: 15000, region: "North" },
  { month: "Feb", sales: 18000, region: "South" },
  { month: "Mar", sales: 22000, region: "North" },
  { month: "Apr", sales: 19000, region: "East" },
  { month: "May", sales: 25000, region: "West" },
  { month: "Jun", sales: 21000, region: "South" }
];

// (A)

const salesExceeded = salesData.filter((data) => data.month && data.sales > 20000)
console.log(salesExceeded)

// (B)

const sales = salesData.find((x) => x.month && x.sales < 20000)
console.log(sales)

// (C)

const check = salesData.find((x) => {
  if (x.sales > "24000")
    return x.region}
)
console.log(check)

// (D)

const verify = salesData.map((x) => {
  if (x.sales > "10000")
    return "true"
})
console.log(verify)