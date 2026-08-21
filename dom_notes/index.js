let parent = document.querySelector("#container");

let child = document.createElement("div");
parent.append(child);

let text = document.createTextNode("this is a text node");
parent.append(text);

// console.log(`${parent}`)
// console.log(parent.nodeType) // parent node is an element
// console.log(parent.childNodes[0]) // parent node's children are displayed. this means it can use methods which apply to nodelist?

// parent.childNodes.forEach((item) => {
//     console.log(item.nodeName)
//     console.log(item.nodeValue)
//     console.log(item.nodeType)
//     if (item.nodeType === 1) {
//         console.log(item.nodeName)
//     }
// }) // how do i cycle through an element's nodeType to find which one is 1 (document)

let parentOne = document.querySelector("#div-parent-one") 
console.log(parentOne.childNodes)
let parentTwo = document.querySelector("#div-parent-two") 
console.log(parentTwo.childNodes)
// parent.childNodes.forEach((item) => {
//     console.log(item.nodeValue)
// })

let test = document.querySelector("#test");
parent.append(test);
console.log(test.textContent);
console.log(test.innerHTML);
console.log(test.innerText);

// create element
let div = document.createElement("div");
div.id = 'main-container';
div.className = 'card-box';

// create string attribute
let classNameString = div.getAttribute('class');
console.log(`Class (string attribute): ${classNameString}`) //card-box

// namednodemap
// element.attr.method()
// we are working with multiple objects(a collection) vs NameNodeMap where we are working with just ONE attr object 
let attributeCollection = div.attributes;
console.log(`Type of object (NameNodeMap): ${attributeCollection}`); // since we have not specfied the property, it just gives us the type of object
console.log("NameNodemap (collection of Attr Objects): ", attributeCollection); // collection of element's attibutes as attr objects
console.log(`Length of NameNodemap: ${attributeCollection.length}`); // length of NamedNodeMap
console.log("First item of NameNodemap: ", attributeCollection.item(0));
console.log("Second item of NameNodemap: ", attributeCollection.item(1));

// attr object
// we are working with just ONE attr object vs NameNodeMap where we are working with multiple objects(a collection)
let idAttrObject = attributeCollection.getNamedItem('id');
console.log(`Type of object (Attr): ${idAttrObject}`) // type of object
console.log("The Attr object: ", idAttrObject) // the attr object itself
console.log(`Is it an Attr Object: ${idAttrObject instanceof Attr}`) // true
console.log(`Attr object value: ${idAttrObject.value}`) // main-container
console.log(`Object of Attr owner element: ${idAttrObject.ownerElement}`) // type of object of owner element
console.log("Attr owner element:", idAttrObject.ownerElement)// ownerElement itself
console.log(`Name of attr object:${idAttrObject.name}`) // name of the object


// namespace
// we are still working with just one object
// difference between this and the average attr object is that these attr objects have namednodespace properties because they have a namednodespace uri
let svgNS = "http://www.w3.org/2000/svg";
let customAttr = document.createAttributeNS(svgNS, "svg:custom-prop");
customAttr.value = "dynamic-val";

console.log(`Namespace URI: ${customAttr.namespaceURI}`);
console.log(`Prefix: ${customAttr.prefix}`);
console.log(`Local Name: ${customAttr.localName}`);
console.log(`Name: ${customAttr.name}`);
console.log(`Value: ${customAttr.value}`)


if (parentOne.compareDocumentPosition(parentOne)) {
    console.log(!!(parentOne.compareDocumentPosition(parentOne)))
} else {
    console.log(!(!!(parentOne.compareDocumentPosition(parentOne))))
}
console.log(parent.compareDocumentPosition(child));
console.log(`
    
    
    DONE
    
    
    `)

let input = document.querySelector("input");
parent.append(input);
// // get element attribute
// let attr = input.getAttribute("placeholder");
// // store initial placeholder property
// // inital value is from the html element attribute 
// let attr = input.placeholder;
// input.placeholder = "placeholder";
input.placeholder = "placeholderz";
// console.log(attr);
console.log(input.placeholder);
// input.setAttribute("placeholder", "new placholder")


let maxL = input.maxLength;
// default value for when the number is not provided for maxL is -1
// so in this case, for maxL is -1 
console.log(maxL)
input.maxLength = 1001;
// now maxL is 20
console.log(maxL = 20);
console.log(input.maxLength);

let inputM = input.inputMode;
input.inputMode = "tel";
// default inputM is empty
console.log(inputM);
console.log(input.inputMode);

let para = document.querySelector("p");
parent.append(para);

let paraDir = para.dir;
console.log(paraDir);
para.dir = "rtl";
console.log(para.dir);


// testing targeting multiple selelctors
let testSelectors = document.querySelectorAll("#container, #div-parent-one");
console.log(testSelectors);

function createTable(button) {
    let jsTable = document.createElement("table")
    parent.append(jsTable);
    console.log(typeof jsTable)
    
    let headerRow = document.createElement("tr");
    headerRow.append()
    let headerCellOne = document.createElement("th");
    headerCellOne.textContent = "City";
    jsTable.append(headerCellOne);
    
    let headerCellTwo = document.createElement("th");
    headerCellTwo.textContent = "Size";
    jsTable.append(headerCellTwo);
    
    let headerCellThree = document.createElement("th");
    headerCellThree.textContent = "Population";
    jsTable.append(headerCellThree);
    
    let rowOne = document.createElement("tr");
    jsTable.append(rowOne);
    
    let rowOneCellOne = document.createElement("td")
    rowOneCellOne.textContent = "Accra";
    rowOne.append(rowOneCellOne);
    
    let rowOneCellTwo = document.createElement("td")
    rowOneCellTwo.textContent = "100km";
    rowOne.append(rowOneCellTwo);
    
    let rowOneCellThree = document.createElement("td")
    rowOneCellThree.textContent = "1000";
    rowOne.append(rowOneCellThree);
}


console.log(typeof jsTable);

let btnPrim = document.createElement("button");
btnPrim.textContent = "Button One";
parent.append(btnPrim);

btnPrim.addEventListener("click", function(e) { 
createTable(this);
}, {once: true});

// let btnEvent = new MouseEvent("click", {bubbles: false, cancelable: false});
// btnPrim.dispatchEvent(btnEvent);