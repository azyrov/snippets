 const inventory = [
  {id: 1, item: "Thor's Hammer", price: 400, quantity: 10},
  {id: 2, item: "Iron Man's Suit", price: 200, quantity: 310},
  {id: 3, item: "Cap's Shield", price: 50, quantity: 5},
  {id: 4, item: "Black Widow's Gauntlets", price: 100, quantity: 150},
  {id: 5, item: "Hawkeye's Bow", price: 300, quantity: 0}
 ]

 /* ARRAY vs OBJECT */
 // array - ordered (has index numbers)
 // object - unordered (has no index numbers)

 /// index numbers allow us to use iterative method items
 
 // array - can use MOST iterative methods
 /// this is because most iterative methods use indexed to track and the items between iterations
 // object - can only use "for...in" loop
 /// the for..in loop first acquires the keys of the object
 /// then the for...in loop goes through the prop, targeting the key of the prop
 /// check how_loops_work.js for more info 
 /*******************/
 
 function discountInventory(arr) {

    const discount = 0.10;


    // i added the inex in the cllback so i could simulate the ordered index numbers for the array produced by the map
    // that said, an object has no index numbers because they are not ordered
    // i could have used totalItems[currentItem.item] and it still would have worked
    const newInventory = arr.reduce(((totalItems, currentItem, index) => {
        totalItems[index] = {
            id: currentItem.id,
            item: currentItem.item,
            price: currentItem.price,
            quantity: currentItem.quantity,
            discount: discount,
            "discounted price": currentItem.price - (currentItem.price * discount)
        }

        return totalItems
    }), {})

    return newInventory
    
 }

 console.log(discountInventory(inventory));
 
