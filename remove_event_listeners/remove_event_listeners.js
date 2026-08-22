let div = document.querySelector("#container");

let btn = document.createElement("button");
let btnText = document.createTextNode("Click Me!");
btn.append(btnText);
div.append(btn);

// create controller
const controller = new AbortController();

// pass signal to listener
//using fn as astand-in for an actual function
btn.addEventListener("click", fn, {signal: controller.signal})

// call abort signal
controller.abort();