function sumAll(min, max) {
    if ((!(Number.isInteger(min))) || (!(Number.isInteger(max)))) return "ERROR"
    if ((min < 0) || (max < 0)) return "ERROR"
    [max, min] = [min, max];
    // lines above replaces entire if block below
    // // if (min > max) {
    // //     const temp = min;
    // //     min = max;
    // //     max = temp;
    // // }

    let sum = 0;

    for (let i = 0; i <= max; i++) {
        sum += i;
    }

    return sum
}

console.log(sumAll(1, 3, 5))

// sort 2 elements of array into ascending order
// create new array to hold new elements
// init validation function below the function
//i valdation function checks for if the array elements are integers and positive
// use validation as if statement where is array element is not an integer or positive then return ERROR
// else if an array item passed validation, put everything else within else
// nested_loop through the numbers just once
//i within the loop, we will generate the new array items
// nested_loop init variable to store the current number array
// nested_loop init variable to store the last number in array
// nested_loop push the current number to the new array
// nested_nested_loop use if loop to create a new variable
// nested_nested_loop the new variable is first one number greater than the current value as an initilizing condition for the for statement
// nested_nested_loop the condition is that the new variable should be less than final number
//i this means our new variable stops reiterating just before the original last number
// nested_nested_loop push new varibles into the empty array for each loop
// nested_loop push final original final number to our empty array now containing original first number, generated array items via variables and final number
// nested_loop sum up numbers in array

let  sumAll = function(...arrayArg) {

    arrayArg = arrayArg.sort((a, b) => a - b);

    let resultArray = [];

    if (!(validatePositiveInteger(arrayArg))) {
    return "ERROR"
    } else {
        for (let i = 0; i < arrayArg.length -1; i++) {

            let currentValue = arrayArg[i];
            let nextValue = arrayArg[i + 1];
            
            resultArray.push(currentValue);
            
            for (let newElement = currentValue + 1; newElement < nextValue; newElement++) {
                resultArray.push(newElement);
            }
            
            resultArray.push(arrayArg[arrayArg.length -1]);
            // resultArray.push(nextValue); same as above line if there is only one other array item apart from currentValue
        }
        
    let sum = 0;
    
    for (let arg of resultArray) {
        sum += arg;
    }
    
    return sum
    }

};

let validatePositiveInteger = (array) => {
    return array.every(item => (Number.isInteger(item)) && (item > 0));
}


console.log(sumAll(1, 3, 5));


j