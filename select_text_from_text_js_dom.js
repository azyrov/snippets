let para = document.createElement("p");
let text = document.createTextNode("This is a paragraph");
para.append(text);
container.append(para);

console.log(para)

let paraN = document.createElement("p");
paraN.innerHTML = "This is <strong>a paragraph</strong>";

paraN.append(text);
container.append(paraN);

console.log(paraN)

// create the variable to hold the copied text
const range = document.createRange();

// determine the startpoint 
range.setStart(text, 0);
range.setEnd(text, 3);

const fragment = range.cloneContents();
document.body.append(fragment);


console.log(document.scripts);