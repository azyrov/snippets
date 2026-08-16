const link = document.querySelector("a");
link.style.fontSize = "50px";
link.textContent = "Sup"
link.href = "https://www.youtube.com" 

let sect = document.querySelector("section");
let para = document.createElement("p");
para.classList.add("class-one");
para.id = "para";
para.textContent = "I sure enjoyed the ride";
sect.append(para)

let anchor = document.querySelector("a")

const text = document.createTextNode(" — the premier source for web development knowledge.")

const linkPara = document.querySelector("p");
linkPara.style.backgroundColor = "yellow"
linkPara.append(text)

sect.append(linkPara)

// clone node
console.dir(anchor)
let clone = anchor.cloneNode(true)
sect.append(clone)
console.dir(clone)

//remove node
clone.remove()
console.dir(clone) // this still shows clone in the console tho and this is a known problem called memory leaks

console.log(document.styleSheets)


// console.dir(sect.childNodes)

para.style.color = "blue";
para.style.padding = "100px"