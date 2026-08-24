let arr = [
    {name: "Kofi", age: "40"},
    {name: "Ama", age: "20"},
    {name: "John", age: "60"},
    {name: "Ella", age: "10"}
]

// sort objects by age (descending)
let sorted = arr.sort((a, b) => a.age - b.age);
console.log(sorted);