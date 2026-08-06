// let btn = document.querySelector("#btn");

// // remove context-menu/right-click menu
// btn.addEventListener("contextmenu", (e) => {
//     // stop default action
//     e.preventDefault();

//     alert("Please don't right-click the button");
// })

// // add message for mouse event
// btn.addEventListener("mouseout", (e) => {
//     alert("Hola");
// })

let body1 = document.querySelector("#body1")

let el1 = document.createElement("div")
body1.append(el1)

let el2 = document.createElement("div")
el2.style = "position: relative; top: -60px"
el1.append(el2)

let el2b = document.createElement("div")
el2b.style = "position: relative; top: -100px"
el1.append(el2b)

// e.target forces the change to stay on the element it is applied to rather than affected a connected element
// eg. a parent element which should bubble will not because e.target is applied to the childname
// use e.currentTarget to allow for the child event to affect the parent container
// this provides a way for bubbling events to reach the parent
// of course, an event which will not normally bubble will not affect the parent even if e.currentTarget is applied
let targetInHandler = (e) => {
    e.target.className = "in" 
}

let targetOutHandler = (e) => {
    e.target.className = "out"
}

let currentTargetInHandler = (e) => {
    e.currentTarget.className = "in" 
}

let currentTargetOutHandler = (e) => {
    e.currentTarget.className = "out"
}

// mouseenter/mouseleave events do not bubble
// the parent is affected because the children (el2) and (el2b) are contained within the parent el1 in the DOM
// as such, even if we shift the children outide of the parent using visual changes, it is still a child of the parent
// we need to cross the parent to reach the child so intercting with the child directly means you are interactig with the parent first, then the child
// if you move from within the parent to the child, then you are now interacting with the child aline since you've crossed the boundary of the parentotenterthe child element
// [target MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
// From the MDN: "The read-only target property of the Event interface is a reference to the object onto which the event was dispatched. It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event."

el1.addEventListener("mouseenter", targetInHandler);
el1.addEventListener("mouseleave", targetOutHandler);

el2.addEventListener("mouseenter", targetInHandler);
el2.addEventListener("mouseleave", targetOutHandler);

el2b.addEventListener("mouseenter", targetInHandler);
el2b.addEventListener("mouseleave", targetOutHandler);

/** body 2 */
let body2 = document.querySelector("#body2")

let el3 = document.createElement("div")
body2.append(el3)

let el4 = document.createElement("div")
el4.style = "position: relative; top: -60px"
el3.append(el4)

let el4b = document.createElement("div")
el4b.style = "position: relative; right: -60px"
el3.append(el4b)


// mouseover/mouseout events bubble
// the e.target applied to the children though mean that ONLY the children are triggered
// So the parent is not triggered even though mouseover/mouseout bubble
// to fix this, use e.currentTarget rather than e.target
el3.addEventListener("mouseover", currentTargetInHandler);
el3.addEventListener("mouseout", currentTargetOutHandler);

el4.addEventListener("mouseover", currentTargetInHandler);
el4.addEventListener("mouseout", currentTargetOutHandler);

el4b.addEventListener("mouseover", currentTargetInHandler);
el4b.addEventListener("mouseout", currentTargetOutHandler);