// create function to receive array (arr), lower limit(a) and upper limit (b)
// filter values which are bigger or equal to a and smaller to equal to b


function filterRange(arr, a, b) {
    let filtered = arr.filter(num => (num >= a) && (num <= b));

    return filtered;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterRange(array, 4, 8))