// v1
// numOne is value 1
// numTwo is value 2
// result is the result from the operation
/* BASIC OPERATION */
/* INPUT
  input values -> 
  values are stored as storedData ->
  storedData is converted to number ->
  number is passed to textField ->
  textField displays numOne
*/
/* OPERATION (TWO VALUES)
  input values +
  if numTwo is not present, storedData is stored as numOne +
  display numOne 
  ->
  click add button + 
  change add button color to active color +
  do nothing else (if numTwo is not present)
  ->
  input values +
  change add button color to inactive color +
  clear numOne from display +
  storedData is stored as numTwo +
  display numTwo 
  ->
  click add button +
  change add button color to active color +
  clear numTwo from display +
  numOne and numTwo are summed up +
  result is stored in numOne +
  reset numTwo to undefined +
  reset result to undefined +
  display numOne
*/

/* OPERATION (ADDING to SUM of PREVIOUS OPERATION)
  numOne is already displayed from previous ooperation
  ->
  click add button + 
  change add button color to active color +
  do nothing else (if numTwo is not present) 
  ->
  input values +
  change add button color to inactive color +
  clear numOne from display +
  storedData is stored as numTwo +
  display numTwo 
  ->
  click add button +
  change add button color to active color +
  clear numTwo from display +
  numOne and numTwo are summed up +
  result is stored in numOne +
  reset numTwo to undefined +
  reset result to undefined +
  display numOne
*/

/*OPERATION (ADDING USING EQUAL TO)
  input values +
  if numTwo is not present, storedData is stored as numOne +
  display numOne 
  ->
  click add button + 
  change add button color to active color +
  do nothing else (if numTwo is not present)
  ->
  input values +
  change add button color to inactive color +
  clear numOne from display +
  storedData is stored as numTwo +
  display numTwo 
  ->
  click equals +
  change equal button color to active color for just a sec while its been clicked +
  numOne and numTwo are summed up +
  result is stored in numOne +
  reset numTwo to undefined +
  reset result to undefined +
  display numOne
*/

/* OPERATION (ADDITIONAL OPERATION after EQUALS)
  numOne is already displayed from previous ooperation
  ->
  click add button + 
  change add button color to active color +
  do nothing else (if numTwo is not present) 
  ->
  input values +
  change add button color to inactive color +
  clear numOne from display +
  storedData is stored as numTwo +
  display numTwo 
  ->
  click equals +
  change equal button color to active color for just a sec while its been clicked +
  numOne and numTwo are summed up +
  result is stored in numOne +
  reset numTwo to undefined +
  reset result to undefined +
  display numOne
 */

// v2
// if operator is undefined, we ca use that to start the operation
// storeddata is stored in numOne
// click adbutton
// operator becomes `+`
// if operator is nt undefined, storedta is stored in numtwo



// initialtyping stores values a umOne
// operator beomes `+`
// when add btn is pressed, storedtasould be seitch to numTwo

// v2
// operatorState
// operator
// numOne
// numTwo

// initial state
// opstate = false
// op = undefined
// numOne = defined
// numTwo = undefined

// first trigger
// if opratorState is false, store storeddata in numTwo
// opstate = true
// op = `+`

// opstate = true
// op = `+`
// numOne = defined
// numTwo = defined

// second trigger
// if opratorState is true,perform operation
// store result in numOne
// storedDta = []
// numTwo = undefined

// opstate = true
// op = `+`
// numOne = defined
// numTwo = undefined


// trigger to add new num to numOne
// if opratorState is true,perform operation
// store result in numOne
// storedDta = []
// numTwo = undefined

// opstate = true
// op = `+`
// numOne = defined
// numTwo = undefined

// trigger for equal to
// opstate = true
// op = `+`
// numOne = defined
// numTwo = defined

// if op = `+`, perform operation
// store in numOne 
// storedDta = []
// numTwo = undefined
// opstate = false 

// opstate = false
// op = `+`
// numOne = defined
// numTwo = undefined

// add trigger after equal op
// if opstate is false, store storedata in numTwo
// opstate = true
// operation `+`

// opstate = true
// operation = `+`
// numOne = defined
// numTwo = defined