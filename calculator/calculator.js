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

let parent = document.querySelector(".parent");
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
let textField = document.querySelector("#textField");
// select symbols btns (minus equalBtn and clearBtn) 
let symbolsMain = document.querySelectorAll("#addBtn, #subtractBtn, #divideBtn, #multiplyBtn");
// selects equalBtn and clearBtn 
let symbolsSecondary = document.querySelectorAll("#equalBtn, #clearBtn");

let numOne = undefined;
let numTwo = undefined;
let operator;
let storedData = [];
let result;


// add listener to the parent
// use if conditions within listener to trigger condtion based on which button is triggered
// trigger different result based on child button triggered

parent.addEventListener("click", (e) => {
  // only areas in parent with a "button" element ancestor is triggered
  const button = e.target.closest("button");
  // if the clicked area does not havea button ancestor, it returns nothing or basically, nothing happens
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

    /* ADD */
    if (numTwo === undefined) {
      numOne = parseInt(storedData.join(""));
    } 


    /* STYLING */
    // remove the styling from the symbol buttons when any button is triggered
    symbolsMain.forEach(item => {
      if(item.classList.contains('active')) {
        item.classList.remove(`active`);
      }
    })

    /* TEST LOGS */
     // logs numbers
    console.log(`${typeof parseInt(storedData.join(""))}`);
     // logs strings
    console.log(`${typeof textField.value}`)
  } else {
    // remove styling for symbol buttons if it already exists
      symbolsMain.forEach(item => {
        if(item.classList.contains('active')) {
          item.classList.remove(`active`);
          // test log
          console.log("No color for you!");
        }
      });

      // add styling for the symbol button being pressed
      button.classList.add('active');
      // test log
      console.log("I got color!");
  }
})


// numOne is value 1
// numTwo is value 2
// result is the result from the operations
/* BASIC OPERATION */
/* INPUT
  input values -> 
  values are stored as storedData ->
  storedData is converted to number ->
  number is passed to textField ->
  textField displays numOne
*/
/* OPERATION (TWO VALUES)
  input values +
  if numTwo is not present, storedData is stored as numOne +
  display numOne 
  ->
  click add button + 
  change add button color to active color +
  do nothing else (if numTwo is not present)
  ->
  input values +
  change add button color to inactive color +
  clear numOne from display +
  storedData is stored as numTwo +
  display numTwo 
  ->
  click add button +
  change add button color to active color +
  clear numTwo from display +
  numOne and numTwo are summed up +
  result is stored in numOne +
  reset numTwo to undefined +
  reset result to undefined +
  display numOne
*/

/* OPERATION (ADDING to SUM of PREVIOUS OPERATION)
  numOne is already displayed from previous ooperation
  ->
  click add button + 
  change add button color to active color +
  do nothing else (if numTwo is not present) 
  ->
  input values +
  change add button color to inactive color +
  clear numOne from display +
  storedData is stored as numTwo +
  display numTwo 
  ->
  click add button +
  change add button color to active color +
  clear numTwo from display +
  numOne and numTwo are summed up +
  result is stored in numOne +
  reset numTwo to undefined +
  reset result to undefined +
  display numOne
*/

/*OPERATION (ADDING USING EQUAL TO)
  input values +
  if numTwo is not present, storedData is stored as numOne +
  display numOne 
  ->
  click add button + 
  change add button color to active color +
  do nothing else (if numTwo is not present)
  ->
  input values +
  change add button color to inactive color +
  clear numOne from display +
  storedData is stored as numTwo +
  display numTwo 
  ->
  click equals +
  change equal button color to active color for just a sec while its been clicked +
  numOne and numTwo are summed up +
  result is stored in numOne +
  reset numTwo to undefined +
  reset result to undefined +
  display numOne
*/

/* OPERATION (ADDITIONAL OPERATION after EQUALS)
  numOne is already displayed from previous ooperation
  ->
  click add button + 
  change add button color to active color +
  do nothing else (if numTwo is not present) 
  ->
  input values +
  change add button color to inactive color +
  clear numOne from display +
  storedData is stored as numTwo +
  display numTwo 
  ->
  click equals +
  change equal button color to active color for just a sec while its been clicked +
  numOne and numTwo are summed up +
  result is stored in numOne +
  reset numTwo to undefined +
  reset result to undefined +
  display numOne
 */