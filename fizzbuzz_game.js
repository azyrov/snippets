let userInput = +prompt("Input a number");

let message; 
if ((typeof userInput === "number") && !isNaN(userInput)) {
    for (let i = 1; i <= userInput; i++) {
        if (i % 3 === 0) {
            message = `fizz`;
            
                if (i % 5 === 0) {
                message = `fizzbuzz`;
                }
        } else if (i % 5 === 0) {
            message = `buzz`;
        } else {
            message = i;
        } 
    console.log(message);
    }  
} else {
    message = `Please input a number`;
    console.log(message);
}

