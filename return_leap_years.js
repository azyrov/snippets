// if number is divisible by 4
// nest_if if the number is divisible by 100
// nest_nest_else if the number is not divisble by 400, return false for if the number is divisible by 100 and divisible by 4
// nest_nest_else return true for if the number is divisible by 400, divisible by 100 and divisible by 4
// nest_else return true if number is divisible by 100, divisible by 4
// else return false for numbers which are not divisible by 4

const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (!(year % 400 === 0)) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    } else {
        return false
    }
}

// 2
// store constants for the expressions for the remainders of each number
// if number is divisible by 4 or by 400
// nest_if the number is divisible by 100 AND divisible by 400,return true
// nest_else_if the number is divisible by 100 AND not divisible by 400, return false
// nest_else if the number is divisible by 100 AND not divisible by 400, return false 
// else return false if the number is not divisible by 4 or by 400 
const leapYears = function(year) {
    const isDivisibleBy4 = (year % 4 === 0);
    const isDivisibleBy100 = (year % 100 === 0);
    const isDivisibleBy400 = (year % 400 === 0);

    if (isDivisibleBy4 || isDivisibleBy100) {
        if (isDivisibleBy100 && isDivisibleBy400) {
            return true
        }  else if (isDivisibleBy100 && (!isDivisibleBy400)) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}