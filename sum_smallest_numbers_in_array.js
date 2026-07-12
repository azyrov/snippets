// filter()
  function sumTwoSmallestNumbers(numbers) {  
    
    let finalArray = numbers.filter(x => ((x >= 0) && (isFinite(x))));

    finalArray.sort((a, b) => a-b);

    return finalArray[0] + finalArray[1];

}

console.log(sumTwoSmallestNumbers([-5, 900, 10, 1, -8, 30, 2, -3, 4, -5]));


/*
  function sumTwoSmallestNumbers(numbers) {  
    let finalArray = [];

    for (i = 0; i < numbers.length; ++i) {
      if ((numbers[i] < 0) || !(Number.isInteger(numbers[i]))) {
          continue;
      }  else {
          finalArray.push(numbers[i]);
      }
    } 

    finalArray.sort((a, b) => a-b);

  return finalArray[0] + finalArray[1];

}
*/