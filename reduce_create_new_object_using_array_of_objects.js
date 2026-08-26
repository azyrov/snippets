 const inventory = [
  {id: 1, item: "Thor's Hammer", price: 400, quantity: 10},
  {id: 2, item: "Iron Man's Suit", price: 200, quantity: 310},
  {id: 3, item: "Cap's Shield", price: 50, quantity: 5},
  {id: 4, item: "Black Widow's Gauntlets", price: 100, quantity: 150},
  {id: 5, item: "Hawkeye's Bow", price: 300, quantity: 0}
 ]
 
 function discountInventory(arr) {

    const discount = 0.10;

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
 
