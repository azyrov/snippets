// // number of arguments should be less than or equal to the number of parameters 
// function myFunction(x, y, z){
//     return x * y
// }
// let arr = [1, 2, 3];
// // use the spread operator to pass the array as an argument to the function
// console.log(myFunction(...arr))

// // using spread operator multiple times
// function myFunction(u, v, w, x, y, z){
//     console.log(u, v, w, x, y, z)
// }
// let arr = [0, 1]
// // arr is added twice
// myFunction(-1, ...arr, 2, ...arr)

// // conditionally ading items to an array
// const isSummer = false;
// const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// console.log(fruits)

// //OR

// let isAllowed = true;
// let arr = [1, "two", 3, "four", ...(isAllowed ? ["Allowed"] : ["None"])]
// console.log(arr)


// // summing array items
// // specify the number of parameters when you know how many arguments you are expecting
// // if the number of arguments passed are more than the numner of paramters, the extra parmeters are ignored
// // for arr=[1, 2, 3], x===1 and y===2 and 3 is ignored
// function sum(x, y) {
//     console.log(x + y);
// }
// let arr = [10, 20, 30]
// sum(...arr) 


// // adding new array items to existing array
// let arr = [1, 2, 3];
// let newArr = [10, 20, ...arr];
// console.log(newArr)

// // combining arrays
// let arr1 = [1, 2, 3];
// let arr2 = [100, 200, 300];
// let finalArr = [...arr1, ...arr2];
// console.log(finalArr);

// // copying an array
// let original = [1, 2, 3, 4, 5]
// let copy = [...original];
// console.log(copy);

