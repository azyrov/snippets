// init array for storing array of number of asterisks
// init variable to hold empty space
// use for loop to iterate rough nFloors
// nest_if true
// THEN ADD the index to (the index  MINUS 1)
// store this in a variable
//i this gives us a list of numbers which start from 1 and jump by 2, meaning odd numbers
// store this variable in an array 
// push variable into array
// ELSE output an error message asking user to enter a number other than 0
//i additional validtion is great and all but using `true` invalidates null (when they pres cancel), undefined, NaN and 0
//i this is very basic validation, useful for now
// convert array to symbols
// use for loop to loop through the numbers to add spaces on the sides
//i spaces should be:
/// equal on both sides, if present
/// be the length of the final element MINUS the present element all divided by 2 (for the space on each side)  


function towerBuilder(nFloors) {
  // build here

  let array = [];
  let symbol = "*";
  let emptySpace = " ";

  for (let i = 1; i <= nFloors; i++) {
    if (true) {
        let oddNum = i + (i - 1);
        array.push(oddNum);
    } else {
      console.log("Please enter a number greater than 0");
    }
  }

  let finalResult = array.map(num => symbol.repeat(num));

  for (let i = 0; i < array.length; i++) {
    finalResult[i] = 
    (emptySpace.repeat((array.at(-1) - array[i]) / 2)) +
    finalResult[i] + 
    (emptySpace.repeat((array.at(-1) - array[i]) / 2));
  }

  return finalResult;
}

console.log(towerBuilder(-10));
