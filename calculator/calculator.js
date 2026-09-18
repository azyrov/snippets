// store first button press as numOne
// store second button press as operator
// store third button press as numTwo
// operator calls a function / functions which takes uses the operator on numOne and numTwo

let numOne;
let numTwo;
let operator;

const add = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const multiply = function(numOne, numTwo) {
  return numOne * numTwo;
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
  }
})

addBtn.addEventListener("click", (e) => {
  console.log(storedData) 
  numOne =  parseInt(storedData.join(""));
  storedData.length = 0;
  operator = '+';
  console.log(`numOne: ${numOne}`);
  console.log(`typeof (numOne): ${typeof (numOne)}`);
  console.log(`storedData: ${storedData}`);
  console.log(`operator: ${operator}`)
})

multiplyBtn.addEventListener("click", (e) => {
  console.log(storedData) 
  numOne =  parseInt(storedData.join(""));
  storedData.length = 0;
  operator = '*';
  console.log(`numOne: ${numOne}`);
  console.log(`typeof (numOne): ${typeof (numOne)}`);
  console.log(`storedData: ${storedData}`);
  console.log(`operator: ${operator}`)
})

equalBtn.addEventListener("click", (e) => {
  console.log(storedData);
  numTwo = parseInt(storedData.join(""));
  storedData.length = 0;
  console.log(`numTwo: ${numTwo}`);
  console.log(`typeof (numTwo): ${typeof (numTwo)}`);
  console.log(`storedData: ${storedData}`);
  
  if (operator === `+`) {
    result = numOne + numTwo;
  } else if (operator === '*') {
    result = numOne * numTwo;
  }

  console.log(result);
})


// let one = undefined;
// let two = undefined;
// threeBtn = 3;
// fourBtn = 4;
// fiveBtn = 5;
// sixBtn = 6;
// sevenBtn = 7;
// eightBtn = 8;
// nineBtn = 9;

// oneBtn.addEventListener("click", (e) => {
//     one = 1;
//     alert(`${one}`);
// })

// addBtn.addEventListener("click", (e) => {
//   operator = `+`;
//   alert(operator);
// })

// twoBtn.addEventListener("click", (e) => {
//   if (twoBtn.style.backgroundColor === "") {
//     twoBtn.style.backgroundColor = "green"
//   } else {
//     twoBtn.style.backgroundColor = ""
//   }
//   two = 2;
// })

// equalBtn.addEventListener("click", (e) => {
//   alert(operate(addBtn, one, two));
// })