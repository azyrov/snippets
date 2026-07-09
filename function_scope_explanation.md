/*```
let dna = ["G", "c", "A", "t"];

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  
  let dnaUpperCase = dna.map(x => x.toUpperCase());
  console.log(dnaUpperCase);
}

DNAtoRNA();
```

so for dnaUpperCase to access dna which is declared outside in the global scope, would i have the re-assign the dna to the exact same value within the function?

```
let dna = ["G", "c", "A", "t"];

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  
dna = ["G", "c", "A", "t"];
  let dnaUpperCase = dna.map(x => x.toUpperCase());
  console.log(dnaUpperCase);
}

DNAtoRNA();
``` 
 */
 
 The short answer is **no, you do not need to re-assign it.** In fact, doing so is unnecessary work for the computer.

To understand why, let's look at the "rules of the road" for how functions find variables:

### 1. The Priority Rule

When you define a function with a parameter—like `function DNAtoRNA(dna)`—you have created a "local box" named `dna` that is waiting to be filled.

* **When you call `DNAtoRNA(dna)`:** You are manually handing the global array to the function. The local `dna` box gets filled with the array, and everything works perfectly.
* **When you call `DNAtoRNA()`:** You are handing the function an empty box (`undefined`).

### 2. Why re-assigning inside works (but is redundant)

In your second example, you wrote `dna = ["G", "c", "A", "t"];` inside the function.

* The function takes the `undefined` parameter (the local box) and overwrites it with your hardcoded array.
* Because you just "filled" the box yourself, the code works. But you didn't actually access the global `dna`; you just created a *new* local one that happens to contain the same data as the global one.

### 3. The "Pure" Way (The Best Practice)

If you want to use the global array without re-typing it inside the function, you have two cleaner options:

**Option A: The Argument Approach (The cleanest)**
Pass the global variable into the function when you call it. This is how 99% of professional code works.

```javascript
let dna = ["G", "c", "A", "t"];

function DNAtoRNA(inputArray) { // Name it clearly
  let dnaUpperCase = inputAnrray.map(x => x.toUpperCase());
  console.log(dnaUpperCase);
}

DNAtoRNA(dna); // Pass the global variable as an argument

```

**Option B: The Direct Access Approach**
If you want the function to "reach out" to the global scope automatically, **remove the parameter entirely**.

```javascript
let dna = ["G", "c", "A", "t"];

function DNAtoRNA() { 
  // No parameter! The function looks "out the window" and finds the global 'dna'
  let dnaUpperCase = dna.map(x => x.toUpperCase());
  console.log(dnaUpperCase);
}

DNAtoRNA();

```

### Why this matters for Alma Exchange

In your **Section 2 (Matching Engine)**, you will have a "Shelf" (the global `orders` array).

* If you write a `findBestOrder()` function, you should **not** re-assign the order list inside the function.
* Instead, pass the `orders` list as an argument. This makes the function **reusable**. You could test it with "mock" orders, "real" orders, or "archived" orders, just by passing different arrays into it.

Does the distinction between "passing data as an argument" and "reaching out to the global scope" make sense? Which one feels more intuitive for your matching engine logic?
