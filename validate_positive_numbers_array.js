// remember to pass the array as an argument for the validator functions 

validatePositiveInteger = (arr) => {

    // every array item runs against the validation callback function 
    return arr.every(item => ((Number.isInteger(item))) && (item > 0));


    // use the some function allows you to run against only a few items
    // return arr.some(item => ) 
}

let arr = [];

// validatePositiveInteger(arr = [1, 2, 3]); // true
// validatePositiveInteger(arr = arr = [-1, 2, 4]); // false
// validatePositiveInteger(arr = arr = [0, 1, 2, 3]); // false
// validatePositiveInteger(arr = arr = ["one", 2]);  // false