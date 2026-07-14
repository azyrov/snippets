/***/
// filter
// create function to receive array (arr), lower limit(a) and upper limit (b)
// REMOVE the numbers which are not between a and b

// filter iterates through the array and removes the false values
// function filterRangeInPlace(arr, a, b) {
//     let filtered = arr.filter(num => ((num >= a) && (num <= b)));

//     return filtered;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(filterRangeInPlace(arr, 3, 8))

/***/
// splice (returned)
// create function to receive array (arr), lower limit(a) and upper limit (b)
// REMOVE the numbers which are not between a and b

// splice removes the numbers while the for loop iterates through the code
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    
        if ((arr[i] < a) || (arr[i] > b)) {
            arr.splice(i, 1);
            i--;
        }
  }
  return arr // this should return the final version of the array(arr) to filterRangeInPlace()
  // filterRangeInPlace() now hold the value of the array (arr)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterRangeInPlace(arr, 3, 8))


/***/
// splice (no return)
// create function to receive array (arr), lower limit(a) and upper limit (b)
// REMOVE the numbers which are not between a and b

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    
        if ((arr[i] < a) || (arr[i] > b)) {
            arr.splice(i, 1);
            i--;
        }
  }
  // return arr 
  // by remove the return, nothing is returned to the function
  // the function has simpy performed its function and removed the values from the arr array
  // after the function is called, the value is arr is modified in the codebase
   // filterRangeInPlace() does not hold the value of the filter array(arr)
  // filterRangeInPlace() simply filters and arr is now modified in the subsequent code
}