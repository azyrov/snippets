// some() method checks if at least ONE of the numbers satisfies the condition
// some() returns true if at least ONE of the numbers is true
// some()returns false if NONE of the numbers is true

let num = [1, 2, 3, 4, 5]

let result = num.some(item => (item < 10))

console.log(result); // true

//num = [1, 2, 3, 4, 11] // true
// at least ONE number satisfies the condition
//some of the numbers satisfies the condition

//num = [11, 12, 13, 14, 15] // false
// all the numbers are false
// none of the numbers satisfy the condition

//2

let result =num.some(item => {
    if (item < 10) {
        return true
    } else {
        return false
    }
})