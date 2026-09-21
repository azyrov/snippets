let arr;

let num;
let filtered;

// join convers an array into a str
// parseInt converts string to num
// map(Number) converts array into num ARRAY


// // parseInt
// arr = ['1', '2', '3', '4', '5'] 
// num = parseInt(arr.join(""));

// // map
// arr = ['1', '2', '3', '4', '5'];
// num = arr.map(Number);

// ARRAY WITH SYMBOLS
arr = ['*', '1', '2', '3', '4', '5'];
// filters out non-numbers first
// specifically, isNaN(item) determines if an item can be converted into a number type
num = arr.filter(item => !isNaN(item));
// map() converts the filtered string array items to number array
num = num.map(Number);
// join converts number array to single string
num = num.join("");
// parseInt converts string to number
num = parseInt(num);

// chained
// num = parseInt(arr.filter(item => !isNaN(item)).map(Number).join(""));

console.log(num);
console.log(typeof num);