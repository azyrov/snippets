// convert numbers to string 
// separate numbers into array
// for loop will loop through each number
// each loop exponentiates the number based on the length of the array
// if sum of the eponentiated numbers is equal to the original number, return true

function narcissistic(value) {
    let valueString = String(value);
    let valueArray = valueString.split("");
    let valueLength = valueArray.length;

    let finalValue = 0;
    // = (valueString[i] ** valueLength);

    for (let i = 0; i < valueArray.length; ++i) {
        finalValue += (valueArray[i] ** valueLength)
    }
    if (finalValue === value){
            return true;
        } else {
            return false;
        }

}

console.log(narcissistic(370));
