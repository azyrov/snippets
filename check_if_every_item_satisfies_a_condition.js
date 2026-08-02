// every() method checks every number
// every() returns true if EVERY number is true
// every() returns false if at least ONE number is false

let num = [1, 2, 3, 4, 5]

let result = num.every(item => ((item >= 0) && (item <= 10)))

console.log(result);
// num = [1, 2, 3, 4, 5, 11] // false


// 2
// using if statement
let result = num.every(item => {
        if ((item >= 0) && (item <= 10)) {
            return true
        } else {
            return false
        }
    }
)

console.log(result);

//3
// using regex
let result = num.every(item => (/^([1-9]|10)$/.test(item)))

//4 using regex
let result = num.every(item => {
    if (/^([1-9]|10)$/.test(item)) {
        return true
    } else {
        return false
    }
})