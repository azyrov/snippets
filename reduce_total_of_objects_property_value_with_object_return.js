 let array = [
    {id: 0, name:"Steve Rogers", age: 40},
    {id: 1, name: "Tony Stark", age: 50},
    {id: 2, name: "Natasha Romanov", age: 35},
    {id: 3, name: "Thor Odinson", age: 1000},
    {id: 4, name: "Hawkeye", age: 25},
    {id: 5, name: "Wanda Maximoff", age: 30}
  ]

  function totalAges(arr) {
    return arr.reduce(((total, current) => {
      // the returned value is an object
      // it contains only one property called age
      // we can insert it into other objects or manipulate it directly 
      return {age: total.age + current.age}

    }), {age: 0});
  }

  console.log(totalAges(array));