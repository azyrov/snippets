let multiplier = 10;

// unlike with addition assignment "+=" where we init the result as 0
// result of 0 will cause all downstream operations to be 0 
let result = 1;

// init the i as 1 instead of 0
for (let i = 1; i <= multiplier; i++) {
    result *= i;
}

console.log(result)