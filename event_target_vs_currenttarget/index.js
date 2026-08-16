let wrapper = document.querySelector("#wrapper");
wrapper.style.backgroundColor = "yellow";

// click in the empty space in the button
// e.target is the button
let btn = document.querySelector("#button");
btn.style.padding = "100px";

// click on the fire element in the button
// e.target is the span
let span = document.querySelector("#span");
span.style.border = "1px solid black"

// e.target is the element which was interacted with
// e.currentTarget is the element the listener is attached to
wrapper.addEventListener("click", (e) => {
    console.log(`Target: ${e.target.id}
Current Target: ${e.currentTarget.id}`)
})
