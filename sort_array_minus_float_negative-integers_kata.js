// create new array for later collection of positve numbers
// use for loop to loop through number index
// nest_if to CONTINUE if numbers are negative OR floats (not integers)
// nest_else if to select only positive integers
// nest_else if THEN push selected positive numbers into new array previously created 
// outside for, sort new numbers from new array from smallest to biggest
// return the first 2 numbers in index

function sumTwoSmallestNumbers(numbers) {  

  // Code here
  let finalArray = [];

  for (i = 0; i < numbers.length; ++i) {
    if ((numbers[i] < 0) || !(Number.isInteger(numbers[i]))) {
        continue;
    }  else {
        finalArray.push(numbers[i]);
    }
  } 
  
//  console.log(`finalArray unsorted: ${finalArray}`);
  finalArray.sort((a, b) => a-b);
//  console.log(`finalArray sorted: ${finalArray}`);

  return finalArray[0] + finalArray[1];

}

