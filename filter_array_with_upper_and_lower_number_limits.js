// create function which takes 2 parameters: the array(arr), lower limit (a), higher limit (b)
// create variable to store filtered elements
// filter conditions should be greater than or equal to a but equal to or less than b


function filterRange(arr, a, b) {
    let filtered = arr.filter(item => ((item >= a) && (item <= b)))

    return filtered
}

let arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4))