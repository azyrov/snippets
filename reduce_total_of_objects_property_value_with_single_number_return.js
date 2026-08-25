let array = [
  {id: 0, name:"Steve Rogers", age: 40},
  {id: 1, name: "Tony Stark", age: 50},
  {id: 2, name: "Natasha Romanov", age: 35},
  {id: 3, name: "Thor Odinson", age: 1000},
  {id: 4, name: "Hawkeye", age: 25},
  {id: 5, name: "Wanda Maximoff", age: 30}
]

function totalAges(arr) {
  // this reduce statement did not work
  // total is just an accumulation of numbers, not an object property
  // return arr.reduce(((total, age) => total.age + age.age), 0)
  return arr.reduce(((total, age) => total + age.age), 0)
}

console.log(totalAges(array));