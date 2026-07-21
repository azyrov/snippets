
let str = "hello everyone";
let reverseStr = "";

for (let i = str.length -1; i >= 0; i--) {
        reverseStr += str[i];
}

console.log(reverseStr)

//2
// use split to convert string to array
// use reverse to reverse strings
// use join to to remove commas

const reverseString = function(str) {
    return str.split("").reverse().join("")
};


// 2
// basically same as 1 but as a function
// keeping thi cos  want the simpler // 1 to be first
// create empty string, reverseString
// use loop to loop from the last number to the first
//i for each iteration of loop, add the value to the empty string reverseString

// const reverseString = function(str) {
//     let reverseStr = "";
    
//     for (let i = str.length -1;  i >= 0; i--) {
//         reverseStr += str[i];
//     }

//     return reverseStr;
// }

// console.log(reverseString("hello everyone"));