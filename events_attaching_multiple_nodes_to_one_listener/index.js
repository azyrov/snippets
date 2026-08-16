let container = document.querySelector("#container");

let childOne = document.createElement("button");
childOne.textContent = "One";
container.append(childOne);

let childTwo = document.createElement("button");
childTwo.textContent = "Two";
container.append(childTwo);

let childThree = document.createElement("button");
childThree.textContent = "Three";
container.append(childThree);

// // attaching the event individually
// childOne.addEventListener("click", function (e) {
//     alert("i am a button");
// })
// childTwo.addEventListener("click", function (e) {
//     alert("i am a button");
// })
// childThree.addEventListener("click", function (e) {
//     alert("i am a button");
// })

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
    alert("i am a button");
    })
})