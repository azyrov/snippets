let div = document.querySelector("#item1");

/* NODELIST vs HTMLCOLLECTION*/

// // queryselectorall produces a nodelist
// // we can only use index numbers to target the children
// // we cannot use id to target the children
// let para = document.querySelectorAll("p")
// console.log(para[0]);
// console.log(para[1]);
// console.log(para[2]);

// // getelementsbytagname produces htmlcollection
// let para = document.getElementsByTagName("p");
// // target elements with index
// console.log(para[0]);
// console.log(para[1]);
// console.log(para[2]);
// // target elements with id
// console.log(para["para1"])
// console.log(para["para2"])
// console.log(para["para3"])

// getelementsbyclassname produces htmlcollection
// let para = document.getElementsByClassName("para");
// // target elements with index
// console.log(para[0]);
// console.log(para[1]);
// console.log(para[2]);
// // target elements with id
// console.log(para["para1"])
// console.log(para["para2"])
// console.log(para["para3"])

// children produces htmlcollection
// since children needs to reference the an leemnt attached to the dom body, we need to append the element first
let paraParent = document.querySelector("#paraParent");
div.append(paraParent);

let para = paraParent.children;
// target elements with index
console.log(para[0]);
console.log(para[1]);
console.log(para[2]);
// // target elements with id
// console.log(para["para1"])
// console.log(para["para2"])
// console.log(para["para3"])





let divs = document.querySelectorAll("div");
let divEl = document.getElementsByClassName("item-1-class")
let node = document.createTextNode("this is text");
let comment = document.createComment("zhe shi comment");
let element = document.createElement("div");
div.append(element)
div.append(node);
div.append(comment);

// nodelist
console.log(`${divs}`)
// not nodelist or htmlcollection
// just a single element
// queryselector
console.log(`${div}`)
// htmlcollection
// getElementsByClassName
console.log(`${divEl}`)
// static nodelist
// queryselectorall
console.log(divs)
// live nodelist (childnodes)
console.log(div.childNodes)
// live htlelement (children)
console.log(div.children)


/* METHODS & PROPERTIES*/
/* NODELIST */
// length works on nodelist
console.log(divs.length)
// length does not work on htmlcollection
console.log(div.length)

// item method works on nodelist
// array index is used
// same as divs[0]  
console.log(divs.item(1))
console.log(divs[1])
// item method does not work on htmlcollection 
// console.log(div.item(0)) //had to comment out due to error log 

// forEach() works on nodelist
divs.forEach((item) => console.log(item))
// forEach() does notwork on htmlcollection
// div.forEach((item) => console.log(item)) //had to comment out due to error log 

// // keys are index numbers of the nodes in the nodelist
// keys() works on nodelist
// for (let key of divs.keys()) {
//     console.log(key)
// }
// // keys() does not work on htmlcollection
// for (let key of div.keys()) {
//     console.log(key)
// }  //had to comment out due to error log 

// value of a node is the entire node
// // values() works on the nodelist
// for (let value of divs.values()) {
//     console.log(value)
// }
// // values() does not work on the htmlcollection
// for (let value of div.values()) {
//     console.log(value)
// }

// entries() lists the key an value of each entry
// entries() works on nodelist
for (let entry of divs.entries()) {
    // produces array-like of key and value pair
    console.log(entry)
}
// separate the entry into key and value 
for (let [key, value] of divs.entries()) {
    // produces array-like of key and value pair
    console.log("Key: ", key)
    console.log("Value: ", value)
}

// // entries() does not work for htmlcollection
// for (let entries of div.entries()) {
    // console.log(entry)
// }


/* HTMLCOLLECTION */

/*METHODS WHICH RETURN HTMLCOLLECTION*/
// // getElementsByClassName produces array-like of elements with matching classname
// // getElementsByClassName produces htmlcollection
// console.log(document.getElementsByClassName("item-1-class"))

// // getElementsByTagName produces array-like of elements with matching classname
// // getElementsByTagName produces htmlcollection
// console.log(document.getElementsByTagName("p"))

// element.children produces array-like of children of element
// element.children works on htmlcollection 
console.log(div.children);
// element.children does not work on nodelist
// div is nodelist because of queryselectorall
console.log(divs.children)

