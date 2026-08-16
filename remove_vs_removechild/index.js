let parent = document.querySelector("#container")

let childOne = document.createElement("p")
parent.append(childOne)

let childTwo = document.createElement("span")
parent.append(childTwo)

// 1
// // removeChild returns the removed child
// // the removed child can be stored within a variable
// let removeChild = parent.removeChild(childOne)
// console.log(removeChild)

// the result is undefined
// remove does not return the  removed child


/**/
// even tho this parent is placed before the child is removed,it will show as though the child is empty when i add the code to remove the child
// reason is console.log on this line and the onelower down are both pointing to the same reference but indeed, the child has been removed
console.log(parent)
/**/

let removeChild = childTwo.remove()
// returns undefined
console.log(removeChild)
// parent now has no childOne
console.log(parent)
