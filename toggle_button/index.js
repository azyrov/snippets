let button = document.querySelector(`[data-value = "text"]`);

button.addEventListener("click", (e) => {
    button.classList.toggle('background-color');
})