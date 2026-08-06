const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

// --- CAPTURING PHASE LISTENERS (Going DOWN) ---

outer.addEventListener('contextmenu', (e) => {
  console.log('1. ⬇️ OUTER captured the event on the way down');
}, {capture: true}); 

middle.addEventListener('mousedown', (e) => {
  console.log('2. ⬇️ MIDDLE captured the event on the way down');
}); // i intentionally added a video method which cannot possbly be triggered since we have no video/audio


// --- TARGET PHASE ---

inner.addEventListener('mousedown', (e) => {
  console.log('3. 🎯 INNER button hit (Target Phase)');
});


// --- BUBBLING PHASE LISTENERS (Going UP - Default) ---

middle.addEventListener('contextmenu', (e) => {
  console.log('4. ⬆️ MIDDLE bubbled the event on the way up');
});

outer.addEventListener('mousedown', (e) => {
  console.log('5. ⬆️ OUTER bubbled the event on the way up');
});

// add anchor
let link = document.createElement("a");
// add attribute
link.href = "https://www.youtube.com/"
link.target = "_blank"
// add innertext
link.textContent = "Click to visit youtube"
// attach to dom
outer.append(link);
console.log(link.childNodes);
// add btn
let btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Clicke Moi";
outer.append(btn);

console.log("console.log:", btn)
console.dir("console.dir:", btn)
console.log("...")
console.log(btn.autocorrect)
console.dir(btn.autocorrect)

// // add click event to btn
// link.addEventListener("click", (e) => {
//   // prevent linked url from opening
//   e.preventDefault();
  
//   alert("Ze linke haz been cliked");
//   console.log(e.button);
// })




// // add click event to btn
// link.addEventListener("mouseover", (e) => {
//   // prevent linked url from opening
//   // e.stopPropagation();
  
//   alert("Ze linke haz been cliked");
// })



// // testing assigning event handlers
// btnNew.onclick = (e) => {
//   alert("One")
// }


// btnNew.onclick = (e) => {
//   alert("Two")
// }

// // testing registering event listener
// let btnNew = document.querySelector("#btnNew");
// btnNew.addEventListener("click", (e) => {
//   alert("One")
// })

// // registering 2nd event listener 
// btnNew.addEventListener("click", (e) => {
//   alert("Two")
// })

btnNew.addEventListener("contextmenu", (e) => {
  e.preventDefault();
})

btnNew.addEventListener("mouseup", (e) => {
  let msg = document.querySelector("#message");

  switch (e.button) {
    case 0:
      msg.textContent = `Left button clicked.
      Code is ${event.button}`;
      break;

    case 1:
      msg.textContent = `Middle button clicked.
      Code is ${event.button}`
      break;

    case 2:
      msg.textContent = `Right button clicked.\nCode is ${event.button}`
      break;

    default:
      msg.textContent = `Unknown mouse button code: ${event.button}`
  }
})

let btnKeys = document.querySelector("#btnKeys");

btnKeys.addEventListener("click", (e) => {
  let keys = [];

  if (e.altKey) keys.push(`alt`);
  if (e.ctrlKey) keys.push(`ctrl`);
  if (e.metaKey) keys.push(`meta`);
  if (e.shiftKey) keys.push(`shift`); 

  let msg = document.querySelector("#message");
  msg.textContent = keys.join("+");

})

// add classname with style attributes
let track = document.querySelector("#track");
track.style = "background-color: goldenrod; height: 200px; width: 400px;"
track.style.border = "1px solid black"

track.addEventListener("mousemove", (e) => {
  let log = document.querySelector("#log");
  log.innerText = `
  ScreenX/Y = (${e.screenX}, ${e.screenY})
  ClientX/Y = (${e.clientX}, ${e.clientY})`
})