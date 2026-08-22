let div = document.querySelector("#container");

// create fragment
const fragment = document.createDocumentFragment();

let num = 5; 

// loop to create new elements
for (let i = 0; i < num; i++) {
    const newDiv = document.createElement("div");

    // append elements to fragment
    fragment.append(newDiv);
}

console.log(div.childNodes);

div.append(fragment);

div.childNodes.forEach((item) => {
    console.log(item.nodeName);
})