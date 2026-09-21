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
	return numOne - numTwo;
};

const multiply = function(numOne, numTwo) {
  result = numOne * numTwo;
  return result;
};

const divide = function(numOne, numTwo) {
  return numOne / numTwo;
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
let subtractBtn = document.querySelector("#subtratBtn");
let divideBtn = document.querySelector("#divideBtn");
let multiplyBtn = document.querySelector("#multiplyBtn");
let equalBtn = document.querySelector("#equalBtn"); 
let clearBtn = document.querySelector("#clearBtn"); 
let textField = document.querySelector("#textField")
let storedData = [];
let result;


parent.addEventListener("click", (e) => {
  if (e.target.tagName === 'BUTTON') {
    const buttonValue = e.target.value;

    storedData.push(buttonValue);

// if inputted value is `+`, dont append it when you converting inputted text into a long string
// this way, we keep only numbers
//we dont even store the `+` value so it does not get the chance to become the target value
if (textField.value !== '+') {
      textField.value = storedData.join("");
    }
    // the default
    // show inputted value in text field if it is not `+`
    // we will update this as we add more operators 
    else {
      textField.value = e.target.value
    }
  }
})

addBtn.addEventListener("click", (e) => {
  console.log(storedData)
// store the input as numOne if it is not already present
// this captures the initial number
  if (numOne === undefined) {
    numOne = parseInt(storedData.join(""));
    storedData.length = 0;
    operator = '+';
    console.log(`storedData.length: ${storedData.length}`);
    console.log(`numOne captured: ${numOne}`);

    // use the else if to capture all other values
  }  else if (numOne !== undefined) {
      // default
      // this is used for when we are performing additions without using equalBtn
      //equalBtn turns operator to ""
      if (operator !== "") {
        // if numOne is already present with numTwo is not
        // we use this to capture the value for the initial sum with the first numOne
        // we also use this to capture value for summing new value with previous sum
        numTwo =  parseInt(storedData.join(""));
        storedData.length = 0;
        operator = '+';
        add(numOne, numTwo);
        numOne = result;
        result = undefined;
        numTwo = undefined;

        // stop the bubbling to the parent
        // by default, parent should have the textField.value of the button from e.target.value fom the parent's else condition
        // default value for addBtn is `+` from the html
        // stopPropagation() stops the parent fom receiving any data from the addBtn 
        e.stopPropagation();
        // then we now provide an actual value for the parent since we sopped it from getting one
        textField.value = numOne;

        console.log(`storedData.length: ${storedData.length}`);
        console.log(`added value to numOne`);
        
        // this is for when the operator is ""
        // we use this right after the equalBtn has been triggered
      } else {
        // there is no storedData
        // there has been no second input for the sum
        // if numOne is already present but numTwo is not (and operator is empty)
        // we use this to capture values from the equalBtn which turns operator into an empty value
        // we use this to force the process to do nothing + wait one step to receive a storedData value before moving on
        // this is important since after the equal operation, we have numOne but no storedData to convert to numTwo
        // as such, when we trigger the addBtn after an equal operation, we need to store `+` so when we input a value with storedData after, we can use the next addBtn trigger to perform the add operation with numOne and numTwo(from storedData)
        // We gave the `+` operator the chance to receive a storedData and then use the next addButton trigger to perform the sum sice we now have numOne and numTwo 
          if (storedData.length === 0) {
            operator = `+`;
            console.log(`add after equal operation, no operation occurs here`);

          // we have a value after an equal operation
          // we are starting a new operation 
          } else if(storedData.length > 0) {
            // storedData is converted to numOne to begin the operation
            numOne =  parseInt(storedData.join(""));
            numTwo = undefined;
            operator = `+`;
            storedData.length = 0;
          }
      }
  } else {
      // this is a net to capture anything out of the norm
      // we will add if-else condition to the above if segment if we need to handle edge cases
      console.log("GENERAL ERROR");
    }

  console.log(`numOne: ${numOne}`);
  console.log(`typeof (numOne): ${typeof (numOne)}`);
  console.log(`numTwo: ${numTwo}`);
  console.log(`typeof (numTwo): ${typeof (numTwo)}`);
  console.log(`storedData: ${storedData}`);
  console.log(`operator: ${operator}`)
  console.log(`result: ${result}`)
})


equalBtn.addEventListener("click", (e) => {
  console.log(storedData);

  numTwo = parseInt(storedData.join(""));
  storedData.length = 0;

  console.log("BEFORE EQUALS");
  console.log(`numOne: ${numOne}`);
  console.log(`typeof (numOne): ${typeof (numOne)}`);
  console.log(`numTwo: ${numTwo}`);
  console.log(`typeof (numTwo): ${typeof (numTwo)}`);
  console.log(`storedData: ${storedData}`);
  console.log(`operator: ${operator}`)
  console.log(`result: ${result}`)
  console.log(`e.target.value: ${e.target.value}`)
  
  // perform sum if operator is `+`
  if (operator === `+`) {
    add(numOne, numTwo);
    // we use numOne for tracking and display in the textField
    // quickly store result of the add operation in numOne
    numOne = result;
  }

  // reset the variables for the next operation
  result = undefined;
  numTwo = undefined;

    // after an operation, operator is reset
  //we can then use an if condition within each operator to give the operator variable its value
  operator = ""; 

  // stop the bubbling to the parent
  // by default, parent should have the textField.value of the button from e.target.value fom the parent's else condition
  // default value for equalBtn is empty from the html since the button wasnot given a value
  // stopPropagation() stops the parent fom receiving any data from the addBtn 
  // we give the textField.value numOne
  e.stopPropagation();
  textField.value = numOne;
  

  console.log("AFTER EQUALS");
  console.log(`numOne: ${numOne}`);
  console.log(`typeof (numOne): ${typeof (numOne)}`);
  console.log(`numTwo: ${numTwo}`);
  console.log(`typeof (numTwo): ${typeof (numTwo)}`);
  console.log(`storedData: ${storedData}`);
  console.log(`operator: ${operator}`)
  console.log(`result: ${result}`)
  console.log(`e.target.value: ${e.target.value}`)
})

clearBtn.addEventListener("click", (e) => {
  numOne = undefined;
  numTwo = undefined;
  result = undefined;
  storedData.length = 0;

  console.log(`
    Numbers reset!!!

    numOne = undefined;
    numTwo = undefined;
    result = undefined;
    storedData: ${storedData}`)
})