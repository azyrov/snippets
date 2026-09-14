let numOne;
let numTwo;
let operator;

const add = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
  return arr.reduce(((sum, current) => sum + current), 0);
};

const multiply = function(arr) {
  return arr.reduce(((sum, num) => sum * num), 1)
};

const power = function(numOne, numTwo) {
  return numOne ** numTwo;
};

