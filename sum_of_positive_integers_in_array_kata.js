// use while loop to collect the user input
// nest_if the input is null, empty or not a finite number
// THEN BREAK out of the while loop
//i no need for an else statement because if the if statemtnt is false, the while statement loops, looping the question 
//i the while loop asks user for input until the input is null, empty or not a finite number
// convert input into number type
// store input as array
// use for...of loop to add all elements in the array

function sumInput() {
	let userInputArray = [];
    
	
	while (true) {
		let userInput = prompt("Please input a number", "");					
		if ((userInput === null) || (userInput === "") || !isFinite(userInput)) {
			break;
		} 

    userInput = +userInput;
    userInputArray.push(userInput);
  
	}

	console.log(userInputArray);


  //  let userInputArrayNum;
  // let userInputArrayNum = userInputArray.map(Number);
  // in the next for loop, i used userInputArrayNum as the main array instead of userInputArray

  let sum = 0;

  for (tempArray of userInputArray) {
      sum += tempArray;
    }

    return sum;
    
}

console.log(sumInput());

