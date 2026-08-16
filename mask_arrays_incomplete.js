let container = document.querySelector("#container");

let box = document.createElement("div");
// box.style.cssText = "height: 500px; width: 500px; background-color: rgb(255, 166, 0); margin: auto";
// box.style.cssText = "height: 500px; width: 500px; margin: auto";
// box.style.border = "5px solid black";
// box.style.color = "green";
container.append(box);

let note = document.createElement("div");
note.textContent = "Hola banditos";
box.append(note);

// function highlight(elem, callback) {
//   // note.style.backgroundColor = "red";
//   elem.style.backgroundColor = "red";
//   if (callback && typeof callback == 'function') {
//     // callback(note)
//     callback(elem)
//   }
// }
// let addBorder = (elem) => {
//   // note.style.border = "1px solid blue";
//   elem.style.border = "1px solid blue";
// }

// highlight(note, addBorder);



// note.addEventListener("click", (e) => {
//   highlight(note)
// })
// let noteEvent = new MouseEvent("click", {bubbles: false, cancelable: false})
// note.dispatchEvent(noteEvent);

// // create custom event
// let event = new CustomEvent("mark", {
//   detail: {backgroundColor: "green"}
// });

// function highlight(elem) {
//   let bgColor = "yellow"
//   elem.style.backgroundColor = bgColor;

//   let outside = "content";

//   let event = new CustomEvent("mark")
//   elem.dispatchEvent(event);

//   // could this be replaced with:
//   // elem.style.backgroundColor = "yellow"
// }

// function addBorder(elem) {
//   elem.style.border = "1px solid black";
// }

// note.addEventListener("mark", (e) => {
//   addBorder(note);

//   console.log(e.detail);
// })

// highlight(note);

// function myName(name, callback){
//     console.log('Hi, my name is ', name);
//     callback();
// } 

// myName('Nena', function(){
//     console.log('and this is how callbacks worked!');
// });

// output:
// Hi, my name is Nena
// and this is how callbacks work!

// function calc(num, callback) {
//   console.log(callback(num))
// }
// calc(5, (item) => item * 5)

// let arrA = ["a", "b", "c", "d", "e"]
// let arrB = ["b", "e", "f", "g", "h"]
// let newArr = [];

// for (let i = 0; i < arrA.length; i++) {
//    if (arrB.includes(arrA[i])) {
//     newArr.push(arrA[i]);
//    } else {
//     console.log("lo")
//    }
// }

// console.log(newArr.join(""))


// // convert question funtion arg to array (textArr) 
// // create new array (finalArr)
// // create arrayto doucble double items (doubleArr)
// // loop through each item in textArr
// // compare item to finalArr and doubleArr
// // if item is not in finalArr, push to finalArr
// // if item is in finalArr,push to doubleArr
// // ifitemis in both finalArr and doubleArr, skip
// function duplicateCount(text){
//   let originalArr = [...text.toLowerCase()];
//   let comparisonArr = [];
//   let finalArr = [];
  
//   for (let i = 0; i < originalArr.length; i++) {
//     if (comparisonArr.includes(originalArr[i])) {
//       if (finalArr.includes(originalArr[i])) {
//         continue
//       } else {
//         finalArr.push(originalArr[i])
//       }
//     } else {
//       comparisonArr.push(originalArr[i])
//     }
//   }
  
//   return finalArr.length
// }

// // duplicateCount("aA11")

function split(string,mask) {
    let result = [];

    let array = [...string]

    for (let i = 0; i < mask.length; i++) {
        let spliced = array.splice(0, mask[i]);
        result.push(spliced);
    }

    let joined = result.map(item => item.join(""));
    
    console.log(result.length)
}

split("abcde", [2, 2, 1])
