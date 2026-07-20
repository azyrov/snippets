// init new empty_array to hold our final array items
// use loop to iterate only the first number
//i condition should exclude iterating the final value 
// current/first value in var
// store last/next value in var 
// push first value into empty_array
// nest_loop use loop to init new variable as an initializer and equate it to current value + 1
// nest_loop loop iterations must not reach the final loop so the new variable should be less than the original finalvalue as a condition  
// nest_loop new variable should increment by 1
// nest_loop push loop items to empty_array and subtract 0.5 from the new variable 
// push final value to empty_array

let arr = [1, 3]

let newArray = [];

for(let i = 0; i < arr.length -1; i++) {

    let currentValue = arr[i];
    let nextValue = arr[i + 1]

    newArray.push(currentValue);

    for (let newElement = currentValue; newElement < nextValue; newElement++) {
        newArray.push(newElement + 0.5);
    }

    // newArray.push(nextValue);
    newArray.push(arr[arr.length -1])
}

console.log(newArray);