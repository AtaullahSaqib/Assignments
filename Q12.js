// Question 12: Time Series Data

// const temperatures = [
//   { date: "2024-01-01", temp: 22 },
//   { date: "2024-01-02", temp: 25 },
//   { date: "2024-01-03", temp: 19 },
//   { date: "2024-01-04", temp: 28 },
//   { date: "2024-01-05", temp: 24 },
//   { date: "2024-01-06", temp: 21 },
//   { date: "2024-01-07", temp: 26 }
// ];

// a) Find the hottest and coldest days
// b) Calculate the average temperature for the week
// c) Find days where temperature increased from the previous day
// d) Identify temperature anomalies (more than 5 degrees different from average)
// e) Create a summary with min, max, average, and total days recorded

const temperatures = [
  { date: "2024-01-01", temp: 22 },
  { date: "2024-01-02", temp: 25 },
  { date: "2024-01-03", temp: 19 },
  { date: "2024-01-04", temp: 28 },
  { date: "2024-01-05", temp: 24 },
  { date: "2024-01-06", temp: 21 },
  { date: "2024-01-07", temp: 26 }
];

// (a)

const find = temperatures.reduce((result, day) => { 
  if (!result.hottest || day.temp > result.hottest.temp) { 
    result.hottest = day;
  }
  if (!result.coldest || day.temp < result.coldest.temp) { 
    result.coldest = day
  }
  return result
}, {})
console.log(find)

// (B)

const totalT = temperatures.map(day => day.temp).reduce((sum, temp) => sum + temp, 0)
const avgTemp = totalT / temperatures.length
console.log(avgTemp)

// (C)

const increasingDays = temperatures.filter((day, x) => { 
  if (x === 0) return false
  return day.temp > temperatures[x - 1].temp
})
console.log(increasingDays)

// (D)

const avg = temperatures.map(day => day.temp).reduce((sum, temp) => sum + temp, 0) / temperatures.length
const anomalies = temperatures.filter(day => Math.abs(day.temp - avg) >= 4)
console.log(anomalies)

// (E)

const temps = temperatures.map(day => day.temp)
const total = temps.reduce((sum, temp) => sum + temp, 0)
const summary = { 
  min: Math.min(...temps),
  max: Math.max(...temps),
  average: total / temperatures.length,
  totalDays: temperatures.length
};
console.log(summary)