let validateStrings = (str) => {
    
    return str.every(item => typeof (item) === "string");
}

let string = ["one", "two", "three"]

console.log(validateStrings(["one", "two", "three"])); // true
console.log(validateStrings(["one", 2])); // false
console.log(validateStrings([1, 2])); // false