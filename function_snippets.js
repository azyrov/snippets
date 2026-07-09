// let lastLetter = (text) => {
//     // numbers do not have the length property
//     // also, the function evaluates from right to left
//     // i.e length -> charAt 
//     // the length property evaluates the argument first
//     // text is easily evaluated by length prop but numbers are not
//     // for the edge case of number type arguments, we need to first separately convert the argument to String  
//     // as such numbers are not coverted to 
//     let cleanText = String(text);
//     return cleanText.charAt(cleanText.length -1);
// }

// alert(lastLetter(1234))

// capitalize 1st letter + lowercase the remaining letters
// let word = (text) => {

// return String(text).charAt(0).toUpperCase() + String(text).slice(1).toLowerCase();

// }



// alert(word("aBcD"));


///////////////////////////////////////////////////////////////////////
// multiply two parameters
// let multNumber = (num1, num2) => {
//     if (((typeof num1 === 'number') && (typeof num2 === 'number')) 
//         && 
//     (!isNaN(num1) && !isNaN(num2))) {
//         return num1 * num2;
//     }   else {
//             alert(`Please input a number.`)
//     }
// }
// alert(multNumber(2, 9));

///////////////////////////////////////////////////////////////////////
// add 2 parameters
// function add7(num) {
//     if (typeof num === 'number' && !isNaN(num)) {
//         return num + 7;
//     } else {
//         alert(`Please input a number.`)
//     }
// }

// alert(add7(20));
