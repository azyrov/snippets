const array = [20, 80, 10, 70, 90]

function reduce(arr) {
 return arr.reduce((currentHighest, number) => Math.max(currentHighest, number))
}

console.log(reduce(array))