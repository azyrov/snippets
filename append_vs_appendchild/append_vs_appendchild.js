let parent = document.querySelector("#parent")

// 1
// this will throw a TypeError
// appendChild does not accept a string as direct input 
// parent.appendChild("text string");

// this works
// append accepts strings
// parent.append("text string")
// console.dir(parent.childNodes)



// 2
let childOne = document.createElement("div")

// // appendChild accepts nodes
// parent.appendChild(childOne)
// console.log(parent.childNodes)

// // append also accepts nodes
// parent.append(childOne)
// console.log(parent.childNodes)


// 3
// // appendChild returns the appended element
// let returnedAppendChild = parent.appendChild(childOne)
// // this returns div, which is parentOne's element 
// console.log(returnedAppendChild)


// // append does not return the appended element
// let returnedAppend = parent.append(childOne)
// // returns undefined
// console.log(returnedAppend)

// 4
let childTwo = document.createElement("span")
let childThree = document.createElement("p")

// // appendChild accepts only the first child and ignores the rest
// parent.appendChild(childOne, childTwo, childThree)
// console.log(parent.childNodes)

// append accepts all the children appended
parent.append(childOne, childTwo, childThree)
console.log(parent.childNodes)