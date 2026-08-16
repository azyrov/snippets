function whatday(num) {
  let dayName = "";
  
  switch (num) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Wrong, please enter a number between 1 and 7";
  }
  console.log(dayName)
}
console.log(whatday(1));

// function whatday(num) { 
//   if (num === 1) {
//     return "Sunday";
//   } else if (num === 2) {
//     return "Monday";
//   } else if (num === 3) {
//     return "Tuesday";
//   } else if (num === 4) {
//     return "Wednesday";
//   } else if (num === 5) {
//     return "Thursday";
//   } else if (num === 6) {
//     return "Friday";
//   } else if (num === 7) {
//     return "Saturday";
//   } else {
//     return "Wrong, please enter a number between 1 and 7"
//   }
// }
// console.log(whatday(1));