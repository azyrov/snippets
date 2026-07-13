/***/
function sumOfTripledEvens(arr) {
  return arr.filter(x => (x % 2 === 0))
  .map(x => (x * 3))
  .reduce((a, b) => a + b, 0);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumOfTripledEvens(array));

/***/
// function sumOfTripledEvens(arr) {
//   return array.filter(x => (x % 2 === 0));
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(sumOfTripledEvens(array));

/***/
// function sumOfTripledEvens(arr) {
//   return array.map(x => {
//       if (x % 2 === 0) {
//         return x * 3;
//       } else {
//         return x;
//       }
//     }
//   ); 
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(sumOfTripledEvens(array));
