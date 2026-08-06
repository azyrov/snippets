function showGreeting() {
  document.getElementById("demo").innerHTML = "Hiya";
}

function removeGreeting() {
  if (document.getElementById("demo").innerHTML === "") {
    document.getElementById("demo").innerHTML = "Click 'Show Greeting' Button first";
  } else if (document.getElementById("demo").innerHTML = "Hiya") {
    document.getElementById("demo").innerHTML = ""
  }
}
