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

// user.isAdmin = true;
// console.log(user.isAdmin);

// console.log(user["Likes birds"]);
// user["Likes birds"] =  false;
// console.log(user["Likes birds"]);
// delete user["Likes birds"];
// console.log(user["Likes birds"]);

// console.log(user)

// let key = prompt("What do you want to know about the user?", "age");

// console.log(key);
// console.log(user[key]);
// console.log(user);

// let fruit = prompt("Which fruit to buy?", "mango");
// let bag = {
//     [fruit] : 5,
// }
// alert(bag.mango);

// let fruit = prompt("Which fruit to buy?", "mango");
// let bag = {};
// bag[fruit] = 5;

// console.log(bag[fruit]);

// let fruit = "apple";
// let bag = {
//     [fruit + "Computers"] : 5
// }

// console.log(bag)

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

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//         city: "accra",
//     }
// }

// let user = makeUser("Kofi", 90);
// console.log(user)


// let obj = {
//     for: 1,
//     let: 2,
//     return: 3,
// }

// console.log(obj.for + obj.let + obj.return);

// let obj = {
//     0 : "test",
// }

// console.log(obj["0"]);

// let obj = {};
// obj.__proto__= 5;
// console.log(obj.__proto__);

// let user = {};
// console.log(user.prop === undefined);

// let user = {
//     name: "John",
//     age: 30,
// }

// let key = "age" 

// console.log("name" in user);
// console.log("age" in user);
// console.log("city" in user);
// console.log(key in user);

// let obj = {
//     test: undefined,
// }
// console.log(obj.test);
// console.log("test" in obj)

// let user = {
//     name: "Ama",
//     age: 40,
//     isAdmin: true,
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "GB",
//     "+1": "USA",
// }

// for (let prop in codes) {
//     console.log(prop);
// }

// let user = {
//     name: "John",
//     surname: "Smith",
// }; 

// user.isAdmin = false;

// for (let prop in user) {
//     console.log(prop)
// }



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
// console.log(person.introduceSelf());
// console.log(person.name.first);
// console.log(person.name.last);

// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
// }

// function logProperty(propertyName) {
//     console.log(propertyName);
// }

// logProperty("name");
// logProperty("age");

// person.age = 50;
// console.log(person["age"]);
// person["name"]["last"] = "lastName";
// console.log(person.name);

// person["eyes"] = "hazel";
// person["farewell"] = function() {
//     console.log("Hi everybody");
// }

// console.log(person);
// console.log(person.farewell);

// const myDataName = "height";
// const myDataValue = "1.75m";

// person[myDataName] = myDataValue;

// console.log(person.height);

// const notification = new Notification("Hola");
// console.log(notification);

// let obj = {data: 42};
// let objCopy = obj;

// objCopy.data = 45;

// console.log(obj);
// console.log(objCopy);


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


let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];


let usersById = groupById(users);
function groupById(arr) {

    let obj = arr.reduce((accumulator, current) => {
        accumulator[current.id] = {
            id: current.id, 
            name: current.name, 
            age: current.age}

        return accumulator
    }, {})

    return obj  
}
console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/