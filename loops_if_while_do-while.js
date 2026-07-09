// do

let cats =["Paul", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length -1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else if (i === cats.length -2) {
    myFavoriteCats += `${cats[i]} `;
  } else {
    myFavoriteCats += `${cats[0]}, `
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats);





// while

let cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length -1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else if (i === cats.length -2) {
    myFavoriteCats += `${cats[i]} `;
  } else {
    myFavoriteCats += `${cats[0]}, `;
  }

  i++;
}

console.log(myFavoriteCats);



// for
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
