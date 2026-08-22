let div = document.querySelector("#container")

div.textContent = "Move mouse over me";
div.style.backgroundColor = "red";
div.style.border = "1px solid black";
div.style.height = "50px";
div.style.width = "50%";


function randomiseBGColor(div) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
} 

div.addEventListener("mouseenter", function (e) {
    randomiseBGColor(this)
})