const students = [
    {first: "Skywalker", last: "Luke", age: "20"},
    {first: "Andor", last: "Cassian", age: "30"},
    {first: "Organa", last: "Leia", age: "40"},
    {first: "Emperor", last: "Palpatine", age: "50"},
    {first: "Fett", last: "Boba", age: "60"}
]

// geta new array of students between 30 and 50 (inclusive)
let ageRange = students.filter((user) => {
    if ((user.age >= 30) && (user.age <= 50)) {
        return true
    }
})