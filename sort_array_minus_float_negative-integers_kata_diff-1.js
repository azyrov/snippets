// sort array from lowest to highest
// create empty array to collect non-negative,non-float integers later
// use for loop to iterate through array
// nest_if the index is negative OR a float, THEN CONTINUE and skip that number
// nest_else triggers for only hte non-negative, non-float integers THEN push the captured index items into our empty array
//outside if, return the first 2 index items for our updated,previously empty index

function sumTwoSmallestNumbers(numbers) {  
  // Code here

  let sortNum = numbers.sort((a, b) => a-b);
  let finalArray = [];

  for (let i = 0; i < sortNum.length; ++i) {
    
    if ((sortNum[i] < 0) || !(Number.isInteger(sortNum[i])) ){
        continue;
    } else {
        finalArray.push(sortNum[i]);
    }
  } 
    finalArray;
    return finalArray[0] + finalArray[1];
}

console.log(sumTwoSmallestNumbers([1, 0, 6, -1, 2, 8, 10, 4]));
*/
