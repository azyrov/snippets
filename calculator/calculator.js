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
  // only areas in parent with a "button" element ancestor is triggered
  const button = e.target.closest("button");
  // if the clicked area does not havea button ancestor, it returns nothin or basically, nothing happens
  if (!(button)) return;

  const value = button.dataset.value;

  // store button input in storedData
  // storing only numbers
  // we will get the valus of the ymbols directly from their data-value
  if (!(isNaN(value))) {
    storedData.push(value);
    console.log(storedData)
    
    // inputted values appear as numbers
    textField.value = parseInt(storedData.join(""));

    /* TEST LOGS */
     // logs numbers
    console.log(`${typeof parseInt(storedData.join(""))}`);
     // logs strings
    console.log(`${typeof textField.value}`)
  }
})