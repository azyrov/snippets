let str = "";

// // only letters
// str = "abcdef";

// // letters + numbers
// str = "1ab2cd3"

// // letters + numbers + spaces
// str = "a1b2 c3d4"

// // letters + numbers + spaces + symbols
// str = "a1?b2 c.3 d4,e5"

// no numbers / text OR basically, the string does not match
// this produces null
// use if statement to catch these
str = ""

let result = str.match(/[A-Za-z0-9]/g);

console.log(result)

