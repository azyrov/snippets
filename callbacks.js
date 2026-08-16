// function funkyFunction(music, isWhiteBoy) {
//     if (isWhiteBoy) {
//         console.log(`Play this: ${music}`)
//     } else {
//         console.log("Where WhiteBoy at?")
//     }
// }
// funkyFunction("Papaoutei", "hi");


// let funkyFunction = function(music, isWhiteBoy) {
//     if(isWhiteBoy) {
//         console.log(`'Playing: ' music`)
//     }
// }
// funkyFunction("Papaoutei");

// let funkyFunction = (music, isWhiteBoy) => {
//         if(isWhiteBoy) {
//         console.log(`Now playing: ${music}`)
//     }
// 
// funkyFunction("Papaoutei", "a");

// let playThe = (funky) => {
//     return funky + "music"
// }
// console.log(playThe("Good "))

// let playThe = funky => {
//     return funky + "music"
// }
// console.log(playThe("Fast "))

// let playThe = funky => funky + "music";
// console.log(playThe("Happy "))


// let playThat = () => {
    // return "funky music"
// }
// console.log(playThat())

// let playThat = () => {return "funkier music"};
// console.log(playThat())

// let playThat = () => "funkiesta music";
// console.log(playThat())

// let notes = ["do", "re", "me"];
// notes.forEach((note) => console.log(note));

// let notes = ["fa", "so", "la"];
// notes.forEach((note) => {
//     console.log(note);
// })

// let notes = ["ti", "do", "re"];
// notes.forEach(function(note) {
//     console.log(note)
// })

// let notes = ["do", "re", "me"];
// notes.forEach(console.log)

// let notes = ["fa", "so", "la"];
// notes.forEach((note) => {return note})

// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// }
// let myArr = [2, 3, 4];
// myForEach(myArr, (item) => {
//     console.log(`${item} * 10 = ${item * 10}`);
// })


// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// }
// let myArr = [2, 3, 4];
// myForEach(myArr, item => console.log(item * 100));

// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// }
// let myArr = [2, 3, 4];
// myForEach(myArr, function(item) {
//     console.log(item * 1000)
// })

// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// }

// function printItemPlusTwo(a) {
//     console.log(a * 1000);
// }
// let myArr = [2, 3, 4];
// myForEach(myArr, printItemPlusTwo)

function myMap(array, callback) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let callbackNum = callback(array[i]);
        newArr.push(callbackNum);
    }

    return newArr
}

console.log(myMap([1, 2, 3], item => item * 10))

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
// let addBorder = (elems) => {
//   // note.style.border = "1px solid blue";
//   elems.style.border = "1px solid green";
// }

// highlight(note, addBorder);


// function changeBgColor(element) {
//   element.style.backgroundColor = "yellow";
// }
// note.addEventListener("click", (e) => {
//   changeBgColor(note)
// })
// let noteEvent = new MouseEvent("click", {bubbles: false, cancelable: false})
// note.dispatchEvent(noteEvent);

function highlight(elem) {
  let bgColor = "yellow"
  elem.style.backgroundColor = bgColor;

  // let outside = "content";

  let event = new CustomEvent("mark", {
    detail: {
      coloeur: bgColor
    }

  })
  elem.dispatchEvent(event);

  // could this be replaced with:
  // elem.style.backgroundColor = "yellow"
}

function addBorder(elem) {
  elem.style.border = "1px solid black";
}

note.addEventListener("mark", function (e) {
  addBorder(this);

  console.log(e.detail);
})

highlight(note);

