let btn = document.createElement("button");
btn.textContent = "Click Me!"
container.append(btn);

function greetingMessage(button) {
    console.log("Hola, amigos")
}

// // event fire ech ime button is pressed
// btn.addEventListener("click", greetingMessage);
// event fires only once
btn.addEventListener("click", greetingMessage, {once: true});