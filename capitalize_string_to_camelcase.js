// my-short-string
// split to form array
// use map to capitalize all the array elements except the first element
// join all the elements

function camelize(arr) {

    return arr.split("-").map((currentValue, index) => {
        if (index === 0) {
            return currentValue
        } else {
            return currentValue.charAt(0).toUpperCase() + currentValue.slice(1)
        }
    }).join("");
}

console.log(camelize("-webkit-transition"))