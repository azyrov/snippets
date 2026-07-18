// create new array to store unique strings
// iterate str through for loop
// if the iterated item is ot present in the array for unique strings already, add itto the string
//i otherwise ignore it

function unique(str) {

    let arrayNew = [];
    
    for (item of str) {
        if (!(arrayNew.includes(item))) {
            arrayNew.push(item);
        }
    }

    return arrayNew
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));