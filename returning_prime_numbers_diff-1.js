// features of prime number
// - greater than 1
// - can only be divided by itself and 1 where there is no remain


// create a variable to receive user input (userInput)
// init empty array
// use for loop to iterate through numbers from 2 till userInput
//nest_if the userinput % 2 is 0 AND userinput % 3 is 0 AND userinput % 5 is 0 AND the userinput % 7 is 0
// push results into empty array 
// add 2,3,5,7 to the begining of the array

let userInput = +prompt("Input a number", "");

let primeNumbers = [];

for (let i = 2; i <= userInput; i++) {
    if ((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !== 0) && (i % 7 !== 0)) {
            primeNumbers.push(i);
    } 
}

primeNumbers.unshift(2, 3, 5, 7);

console.log(primeNumbers);
