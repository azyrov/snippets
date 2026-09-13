let array = [1, 1];

let count = 5; 

for (let i = 0; i <= count; i++) {
    let current = array[i];
    let next = array[i + 1]; 
    let newValue = current + next;

    array.push(newValue);
}

console.log(array);