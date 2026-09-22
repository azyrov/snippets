// store first button press as numOne
// store second button press as operator
// store third button press as numTwo
// operator calls a function / functions which takes uses the operator on numOne and numTwo

let numOne;
let numTwo;
let operator;

const add = function(numOne, numTwo) {
  result = numOne + numTwo;
  return result;
};

const subtract = function(numOne, numTwo) {
  result = numOne - numTwo;
  return result;
};

const multiply = function(numOne, numTwo) {
  result = numOne * numTwo;
  return result;
};

const divide = function(numOne, numTwo) {
    result = Math.round(numOne / numTwo);
  return result;
}

const operate = function(operator, numOne, numTwo) {
  console.log(numOne)
  console.log(numTwo)
  console.log(operator)
  if (operator === `+`) {
    console.log(numOne + numTwo);
  }
}

let oneBtn = document.querySelector("#oneBtn");
let twoBtn = document.querySelector("#twoBtn");
let threeBtn = document.querySelector("#threeBtn");
let fourBtn = document.querySelector("#fourBtn");
let fiveBtn = document.querySelector("#fiveBtn");
let sixBtn = document.querySelector("#sixBtn");
let sevenBtn = document.querySelector("#sevenBtn");
let eightBtn = document.querySelector("#eightBtn");
let nineBtn = document.querySelector("#nineBtn");
let zeroBtn = document.querySelector("#zeroBtn");
let addBtn = document.querySelector("#addBtn");
let subtractBtn = document.querySelector("#subtractBtn");
let divideBtn = document.querySelector("#divideBtn");
let multiplyBtn = document.querySelector("#multiplyBtn");
let equalBtn = document.querySelector("#equalBtn"); 
let clearBtn = document.querySelector("#clearBtn"); 
let textField = document.querySelector("#textField")
let storedData = [];
let result;


// add listener to the parent
// use if conditions within listener to trigger condtion based on which button is triggered
// trigger different result based on child button triggered

parent.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!(button)) return;

  alert(button.dataset.value)
})

