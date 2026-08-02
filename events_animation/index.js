let box = document.querySelector("#box");
box.style.cssText = "background-color: gray; width: 100px; height: 100px; position: relative; animation-name: slideAndColor; animation-duration: 3s; animation-iteration-count: 5;"

// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = "green";
// box.style.fontSize = "100px";

// remove property
// // box.style.removeProperty("font-size");

// // event for when animation starts
// this works
// box.addEventListener("animationstart", function logMessage(e) {
//     console.log("Animation starts now")
// })

// // event for when animation ends
// // doesnt work if animation-iteration-count is infinite
// box.addEventListener("animationend", function logMessage(e) {
//     console.log("Animation ends now")
// })

// event for when animation repeats
box.addEventListener("animationiteration", function logMessage(e) {
    console.log("Animation iteration has occured")
    console.log(`Elapsed time: ${e.elapsedTime}`)
})