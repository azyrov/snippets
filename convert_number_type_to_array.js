let value = 12345;

// // won't work
// // // number type does not convert to arrays directly
// [...num]

// // 1
// // first convert to array as string type
// strType = [...String(value)]
// // then convert back to number type
// numType = strType.map(Number)

// 2
let numType = [...String(value)].map(Number)

console.log(numType)