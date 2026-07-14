// shuffle array
// use Math.random with sort




function shuffle(arr) {

    // return arr.sort(() => Math.random() - 0.5);

    let newArr = [...arr];
    // ... creates a new array completely separate from arr
    // newArr and arr are nowpointing to differet memory locations
    // `let newArr = arr` means newArr is still pointing at arr 

    newArr.sort(() => Math.random() - 0.5);

    return newArr
}

let array = [1, 2, 3];


let newArr = shuffle(array);

console.log(array);
console.log(newArr);