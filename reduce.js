let div = document.querySelector("#container");

// let arr = [1, 2, 3];

// let newArr = arr.reduce((accumulator, current) => {
//     return accumulator + current
// }, 0)

// console.log(newArr);

let arr = [
    {id: "1", name: "John", age: 20},
    {id: "2", name: "Kofi", age: 30},
    {id: "3", name: "Ama", age: 40}
]

// using reduce to getthe id as the object names
let obj = arr.reduce((acc, curr) => {
    acc[curr.id] = {
        id: curr.id, 
        name: curr.name,
        age: curr.age
    };

    return acc;
}, {}) 

console.log(obj)

