/* reduce
let arr = [1, 2, 3, 4];

let sum = arr.reduce((sum, value) => sum + value, 0);

console.log(sum);
*/

/* for
let arr = [1, 2, 3, 4];

let sum = 0;

for (let i = 0; i <arr.length; i++) {
  sum += arr[i];
}

console.log(`for: ${sum}`);
*/

/* for...of
let arr = [1, 2, 3, 4];

let sum = 0;

for (let element of arr) {
    sum += element; 
}

console.log(`for...of: ${sum}`);
*/