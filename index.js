// creating an object
// let userA = new Object();

// console.log(typeof userA);
// console.log(userA);


// let user = {
//     name: "John",
//     age: 30,
//     "Likes birds": "yes",
// }
// console.log(typeof user);
// console.log(user);
// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user.name);
// console.log(user.age);

// adding a property
// user.isAdmin = true;
// console.log(user.isAdmin);

// changing a property value
// console.log(user["Likes birds"]);
// user["Likes birds"] =  false;
// console.log(user["Likes birds"]);

// deleting a prop
// delete user["Likes birds"];
// console.log(user["Likes birds"]);
// console.log(user)

// adding a prop
// user.isAdmin = true;
// console.log(user.isAdmin)

// using an input prompt to give the object key a prop name
// let key = prompt("What do you want to know about the user?", "name");
// console.log(key);
// console.log(user[key]);
// console.log(user);

// using any input to give the object key a prop name
// let fruit = prompt("Which fruit to buy?", "pear");
// let bag = {
//     [fruit] : 5,
// }
// alert(bag[fruit]);

// using any input to give the object key a prop name
// let fruit = prompt("Which fruit to buy?", "mango");
// let bag = {};
// bag[fruit] = 5;
// console.log(bag[fruit]);

// combining multiple words for a prop name
// let fruit = "apple";
// let bag = {
//     [fruit + "Computers"] : 5
// }
// console.table(bag)


// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     }
// }
// let user = makeUser("Ama", 50);
// console.log(user.name);
// console.log(user.age);
// console.log(user["name"]);
// console.log(user["age"]);

// populating an object based on the arguments provided to a function 
// function makeUser(name, age) {
//     return {
//         name,
//         age,
//         city: "accra",
//     }
// }
// let user = makeUser("Kofi", 90);
// console.log(user)


// ading objects
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3,
// }
// console.log(obj.for + obj.let + obj.return);

// prop can be names anything except __proto__
// let obj = {
//     0 : "test",
// }
// console.log(obj["0"]);

// prop can be names anything except __proto__
// let obj = {};
// obj.__proto__= 5;
// console.log(obj.__proto__);

// propr returns undefined if not present
// let user = {};
// console.log(user.prop === undefined);

// check if a prop is present in an object
// let user = {
//     name: "John",
//     age: 30,
// }
// let key = "age" 
// console.log("name" in user);
// console.log("age" in user);
// console.log("city" in user);
// console.log(key in user);

// undefined can actully be given as value
// the object's presence will be true if checked usnig "in"
// here, undefined does no mean the prop is not present
// let obj = {
//     test: undefined,
// }
// console.log(obj.test);
// console.log("test" in obj)


// looping through an object
// let user = {
//     name: "Ama",
//     age: 40,
//     isAdmin: true,
// };
// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// props are sorted by number order from lowest to highest
// let codes = {
//     "49": "Germany",
//     41: "Switzerland",
//     "44": "GB",
//     1: "USA",
// }

// for (let prop in codes) {
//     console.log(prop);
// }

// + changes the prop keys
//prop keys are sorted by oldest to newest added
// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "GB",
//     "+1": "USA",
// }
// for (let prop in codes) {
//     console.log(prop);
// }

// loop through object
// let user = {
//     name: "John",
//     surname: "Smith",
// }; 
// user.isAdmin = false;
// for (let prop in user) {
//     console.log(prop)
// }


// adding objectwith many types of props
// const person = {
//     name: {
//         first: "Bob",
//         last: "Smith",
//     },
//     age: 32,
//     bio () {
//         console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`)
//     },
//     introduceSelf() {
//         console.log(`Hi, I'm called ${this.name[0]}`)
//     },
// }

// console.log(person["name"]);
// console.log(person["name"]["first"]);
// console.log(person.age);
// console.log(person.bio());
// // does not work cos objects are unordered
// console.log(person.introduceSelf());
// console.log(person.name.first);
// console.log(person.name.last);

// add prop
// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
// }
// person["weight"] = "10kg";
// console.log(person);

// logging prop name with function
// function logProperty(propertyName) {
//     console.log(propertyName);
// }
// logProperty("name");
// logProperty("age");

// playing around with an object
// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
// }
// person["weight"] = "10kg";
// person.age = 50;
// // console.log(person)
// // console.log(person["age"]);
// person["name"]["last"] = "lastName";
// // console.log(person.name);
// console.table(person)
// person["eyes"] = "hazel";
// person["farewell"] = function() {
//     console.log("Hi everybody");
// }
// console.log(person);
// console.log(person.farewell);
// // adding a variable as a key of another variable
// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;
// console.log(person.height);

// copied objects reference and can chnge the original when the copy is changed 
// copying an object
// let obj = {data: 42};
// let objCopy = obj;

// objCopy.data = 45;

// console.log(obj);
// console.log(objCopy);

// sorting a prop value
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ pete, john, mary ];
// function sortByAge(arr) {
    
//     let sort = arr.sort((a, b) => a.age - b.age);
//     return sort

//     // let userAge = arr["age"];
//     // let sort = userAge.sort((a , b) => a - b);
//     // return sort
// }

// console.log(sortByAge(arr));

// calculating average of prop values
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// function getAverageAge(arr) {
//     let userAge = arr.map(user => user.age)
//     let userTotalNumber = userAge.length;
//     // let sum = 0
//     // for (let i = 0; i < userTotalNumber; ++i) {
//     //     sum += userAge[i];
//     // }
//     let sum = userAge.reduce(((initial, current) => initial + current), 0);
//     return sum / userTotalNumber;
// }
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// creating  a new object with a prop name using existing prop value
// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);
// function groupById(arr) {
//     let obj = arr.reduce((accumulator, current) => {
//         accumulator[current.id] = {
//             id: current.id, 
//             name: current.name, 
//             age: current.age}
//         return accumulator
//     }, {})
//     return obj  
// }
// console.log(usersById);

/*
after the call we should have:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// creating a new object using props nd keys from old object
// const inventory = [
//   {id: 1, item: "Thor's Hammer", price: 400, quantity: 10},
//   {id: 2, item: "Iron Man's Suit", price: 200, quantity: 310},
//   {id: 3, item: "Cap's Shield", price: 50, quantity: 5},
//   {id: 4, item: "Black Widow's Gauntlets", price: 100, quantity: 150},
//   {id: 5, item: "Hawkeye's Bow", price: 300, quantity: 0}
// ]
//  function discountInventory(arr) {
//   const discount = 0.10;
//   return arr.map((item) => {
//     return {
//       id: item.id,
//       item: item.item,
//       price: item.price,
//       quantity: item.quantity,
//       discount: discount,
//       "discounted price": item.price * discount
//     }

// // using reduce for the same thing
// // map() is better for this since we are simply modifying the exact same array items
// function discountInventory(arr) {
//   const discount = 0.10;
//   let newArr = arr.reduce(((totalObj, currentObj) => {
//       return {
//         id: currentObj.id,
//         item: currentObj.item,
//         price: currentObj.price,
//         quantity: currentObj.quantity,
//         discount: discount,
//         "discounted price": currentObj.price * discount
//     }
//   }))
  
//   return newArr
//  }
//  console.log(discountInventory(inventory))


// populate new array with objects
// function collectData(name, age, grade) {
//   return {
//     name: name,
//     age: age,
//     grade: grade
//   }
// }

// let studentData = [];
// studentData.push(collectData("Kofi", 14, 6));
// studentData.push(collectData("Esi", 13, 8));

// // push new objects into array
// studentData.push({name: "Ama", age: 17, grade: 4});
// studentData.push({name: "Kwaku", age: 16, grade: 6})

// // // remove the last object element
// // console.log(studentData)
// // studentData.pop()
// // console.log(studentData)

// // // remove an element with splice
// // studentData.splice(1, 2)
// // console.log(studentData)

// // looping through with forEach
// studentData.forEach(student => console.log(student));
// studentData.forEach(student => console.log(student.name));

// // create new array with map
// let studentName = studentData.map(student => student.name);
// let studentAge = studentData.map(student => student.age);
// let studentGrade = studentData.map(student => student.grade);

// console.log(studentName);
// console.log(studentAge);
// console.log(studentGrade);

// // filter through array objects to the create new array
// let gradeSixStudent = studentData.filter(student => (student.grade === 6));
// let aboveAgeLimit = studentData.filter(student => (student.age > 13))

// console.log(gradeSixStudent);
// console.log(aboveAgeLimit);

// // use reduce to find the oldest student
// let oldestStudent = studentData.reduce(((currentHighest, student) => {
//   if (student.age > currentHighest.age) {
//     return student
//   } else {
//     return currentHighest
//   }
// }));

// console.log(oldestStudent);

// let students = [
//   {
//     name: "John",
//     age: 14,
//     grade: 5 
//   },
//   {

//   }
// ]


// // find the oldest in an object array
// const findTheOldest = function(arr) {
//   // get the current date
//   // used for when the year of death is not given 
//   let todayDate = new Date();
//   // get the current year
//   let year = todayDate.getFullYear();

//   let oldest = arr.reduce(((highest, current) => {
//     // if year of death is not provided, the year of death is this year
//   if ((current.yearOfDeath === undefined) || (highest.yearOfDeath === undefined)) {
//   current.yearOfDeath = year;
//   highest.yearOfDeath = year;
//   } else {
//   // if year of death is provided, use the provided year
//     current.yearOfDeath = current.yearOfDeath;
//     highest.yearOfDeath = highest.yearOfDeath;
//   }
  
//   // get age of previous person (or the very first person)  
//   let previousPerson = highest.yearOfDeath - highest.yearOfBirth;
//   // get age of current person
//   let currentPerson = current.yearOfDeath - current.yearOfBirth;

//   if (previousPerson > currentPerson) {
//     return highest
//   } else {
//     return current
//   }
//   }))
//   return oldest;
// };
// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1066,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1900,
//     yearOfDeath: 1910,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1900,
//     yearOfDeath: 1920,
//   },
// ]
// console.log(findTheOldest(people));


const factorial = function(num) {

  if ((num === 0) || (num === 1)) {
    return 1
  }


  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i
  }


  // let mult = (num * num - 1);
  // let sum = 0;

  // for (let i = num; i > 1; --i) {
  //   if (num === i) {
  //     sum += i * (i - 1);
  //   } else if (num > i) {
  //     console.log(sum);
  //     console.log(i);
  //     sum += sum * (i - 1);
  //   }
  // }

  // return sum;


    // let reduced = (i - 1);

    // if (num === i) {
    //   sum += num * reduced;
    // } else if (num > i) {
    //   sum += sum * (reduced - 1);
    // } 
  }

  console.log(factorial(5));