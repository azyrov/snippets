// add a rest parameter with 1 other parameter (which should contain the array)
//i the first paramter contains the array
//i the rest parameter now holds the additional values 
// filter through the initial parameter by comparing the values with the rest parameter
// use NOT include to filter out array items which are not in the rest parameter

// const removeFromArray = function(array, ...restArg) {

//     return array.filter(item => !restArg.includes(item));
// };

// forEach
// add a rest parameter with 1 other parameter (which should contain the array)
//i the first paramter contains the array
//i the rest parameter now holds the additional values 
// create new array to hold new array items
// loop each item using foreach toremove items which are not present in the rest parameter
const removeFromArray = function(array, ...restArg) {
    let newArray = [];

    array.forEach(item => {
        if (!restArg.includes(item)) {
            newArray.push(item)
        } 
    })

    return newArray
    
};