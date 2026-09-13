# Important terms
## Iterable
- Objects or collections which can be iterated through

## Symbol.Iterator
- A method ALL iterables have which allows them to be iterated through
- Egs of iterables with symbol.iterator
    - arrays
    - maps
        - etc
- Egs. of loops which use Symbol.iterator
    - for...of
    - spread
        - etc.

### Array.prototype
- an object which allows *arrays* to be iterated through
- has properties and built-in methods
    - these methods allow iteration through iterables which inherit them
    - ONLY arrays inherit methods from this object
    - this allows these specific methods to iterate arrays
-  Egs. of *Array.prototype* methods which can iterate arrays 
    - filter()
    - map()
    - forEach()
        - etc.

## Iterator
- An object which is created during a loop with 2 properties:
    - value
    - done
- an object created by the iterable's symbol.iterator after it passes its symbol.iterator method to the loop
- the iterator object is handed over to the loop

### done (Iterator property)
- Property of iterator loop
- Is boolean / has 2 values:
    - true
    - false
- true
    - there is no next value in the iterable
- false
    - there is a next value in the iterable

### value (Iterator property)
- next value in the iterable

## loop / looping mechanism / consumer
- The method which initates the loop
    - for...of
    - spread
    - *Array.prototype* methods
        - filter()
        - map()
        - forEach()
            - etc

## next() method
- A method which is called by loop on each iteration
- next() method is called by the loop



## Process  of iteration
- before the loop begins ->
- loop calls the symbol.iterator method of the iterable ->
- iterable hands symbol.iterator to loop ->
- symbol.iterator creates the iterator object ->
- iterable hands iterator object to loop ->
- loop calls next() method ->
- if next() method done property is `false`, the value property acquires the next value in the iterable -> 
- the iteration runs ->
- next() method is called again ->
- while next() method done property is `true`, the loop ceases, if not, the next() method is called continously until the one property is `false`