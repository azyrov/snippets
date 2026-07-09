//  Store html elements in variables 
let numOne = document.getElementById("firstNumInput");
let numTwo = document.getElementById("secondNumInput");

// INIT addNum function to perform calculation  
let addNum = () => {
    alert(Number(numOne.value) + Number(numTwo.value));
}
