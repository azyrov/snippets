let container = document.querySelector("#container")

let input = document.createElement("input");

input.type = "text"
input.id = "message"

container.append(input);

// input.addEventListener("keydown", (e) => {
//     console.log("Key is down")
// })

// input.addEventListener("keypress", (e) => {
//     console.log("Key is pressed")
// })

// input.addEventListener("keyup", (e) => {
//     console.log("Key is up")
// })

input.addEventListener("keydown", (e) => {
    console.log(`Key: ${e.key}, Code: ${e.code}`)
})