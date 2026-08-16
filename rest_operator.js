// // NORMALLY
// // if we want to pass an array to a function, we pass the array as an argument
// let arr = [1, 2, 3];
// function normalArray(array) {
//     console.log(array)
// }
// // we are simply passing the array [arr] into the function
// normalArray(arr)

// // REST OPERATORS
// // we use the rest operator when the function arguments are a list BUT NOT AN ARRAY
// // rest operator converts the arguments into an array
// function restOperator(...list) {
// // `function restOperator(list)` will not work because list is not an array here,just a list 
//     // we can now perform iterations on the list (which is now an [array])
//     console.log(list)
// }
// // the operators are simply a list of numbers and not an array
// restOperator(1, 2, 3)

// // destructuring
// // we can extract and define variables from the rest operator[array]
// // the remaining [array] items are stored in the rest operator
// function myFunction(a, b, c, ...list) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(list);
// }
// myFunction("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");


// // only TWO arguments
// function myFunction(a, ...list) {
//     // "one" is stored in a
//     // whatever remaning items are stored in the rest operator 
//     // in this case, only "two" remained 
//     console.log(a);
//     console.log(list);
// }
// myFunction("one", "two")

// // only ONE arguments
// function myFunction(a, ...list) {
//     // "one" is stored in a
//     // whatever remaining items are stored in the rest operator
//     // in this case, nothing remained
//     // [list] is an empty array
//     console.log(a);
//     console.log(list);
// }
// myFunction("one");

// // NO arguments
// function myFunction(a, ...list) {
//     // a is undefined because nothing is stored in a
//     // whatever remaining items are stored in the rest operator
//     // in this case, nothing remained
//     // [list] is an empty array 
//     console.log(a);
//     console.log(list);
// }
// myFunction();

// // length of the rest operator
// // the rest operator is an array
// // as such, it has a length property

// function myFunction(...list) {
//     console.log(list.length)
// }
// myFunction(1, 2, 3) // 3
// myFunction(1, 2, 3, 4, 5, 6) // 6

// // using rest operators with other arguments
// function multiply(multiplier, ...list) {
//     // first number "100" is stored as multiplier
//     console.log(list.map((item) => multiplier * item))
//     // we could just store the new array with:
//     // let newArr = list.map((item) => multiplier * item);
// }
// multiply(100, 1, 2, 3, 4, 5);

// // applying array methods to rest operators
// function sortRestArg(...list) {
//     let sorted = list.sort((a, b) => a-b);
//     return sorted;
// }
// console.log(sortRestArg(1000, 4, 20, 7, 900))