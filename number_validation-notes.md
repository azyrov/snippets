# isNaN()
## Action
- (first) converts value to number type
- (then) checks if value is not a number
### True if...
1. value cannot be coreced into a number type
eg. 
- `"abc"` // cannot be corced into a number no matter what 
- `"123abc"` // cannot be corced into a number because it contains letters

2. value is NaN
- isNaN(NaN) // true becuase it's literally NaN

3. value is undefined
- isNaN(undefined)

### False if...
1. value is a number / can be coerced directly into a number from another type (like str)
eg. 
- `123` // a number
- `"123"` // can be coerced directlt into number type as 123
- `null` // null is coerced to 0
- `""` //  an empty string is coerced to 0

## When to use
1. validate:
- NaN
- string cotaining non-numbers
- undefined

2. validate NOT:
- number
- string containing only numbers 
- null
- user clicking 'cancel'  
- empty string

# Number.isNaN()
## Action
- checks if is number type 
- checks if value is NaN

### clarification
: don't worry too much about this step but the 
reason is because NaN is _based on js specification_ a number type'
: checking if it's a Number type is the first gate before it is 
confirmed as a NaN
:: basically it goes **straight to checking NaN** as it's checking if it's 
NaN

```
value 
(->is a number type ->yes ->->) check NaN ->->->(A) value returns `NaN` -> `true`
9->is a number type ->yes ->->) check NaN ->->->(B) value returns any number 
other than  NaN -> `false`

->is a number type ->no -> `false` 
```

### True if...
1. value is NaN
eg.
// NaN returns true for math errors 
NaN // outputs true 
`"abc" / 2` // outputs NaN
`NaN + "any number"` //outputs NaN

### False if...
1.value is a number (other than NaN)
`123` // outputs true

2.value is any type other than a number
`abc` // string outputs false
`""123abc""` // string outputs false
`"abc"` // string outputs false
`null` // false // null is not NaN
`""` // false // empty string is not NaN

## When to use
1.  validate:
- NaN // any value which is a number, string or other type but is not 
NaN
// NaN usually returns for math errors
// use Number.isNaN to catch these math errors
2. _catch_ math errors
// NaN returns true for math errors 
// use Numbers.isNaN to catch those errors
2. validate NOT:
- number
- string cotaining non-numbers
- string containing only numbers 
- null
- user clicking 'cancel'  
- empty string

# isFinite()
## Action
- checks if a value is:
1. number type
2. string which can be coerced to number type
- false for:
1. Infinity
2. -Infinity
3. NaN
4. strings which cannot be coerced to number type


### True if...
1. value is a number type
eg.
`123` // true
`"123"` // true // coerces to 123
`null` // true //coerces to 0
`""` // true // coerces to 0

### False if...
1. value is any other data type
eg.
`""abc""` // false // cannot coerce entire string
`"123abc"` // false //cannot coerce entire string

2. Infinity or -Infinity
eg.
`Infinity` // false
`-Infinity` // false
`1 / 0` // false // Infinity is returned whe we divide a number by 0
`NaN` // false

## When to use
1. validate
- number
- string containing only numbers 
- null
- user clicking 'cancel'  
- empty string

2. validate NOT:
- string cotaining non-numbers
- Infinity
- -Infinity
- NaN
- undefined


# number.isFinite()
## Action
- checks if number is a number type

## True if...
1. value is a number
eg.
`123` // true

## False if...
1. value is a string
`"123"` // false // does not coerce string
`"abc"` // false // does not coerce string
`"123abc"` // false // does not coerce string
`null` // false // does not coerce string
`""` // false // does not coerce string

2. Infinity or -Infinity
`Infinity` // false
`-Infinity` // false
`NaN` // false

## When to use
1. validate:
- numbers

2. validate NOT:
- string containing only numbers 
- string cotaining non-numbers
- null
- user clicking 'cancel'  
- empty string
- NaN
- Infinity
- -Infinity
- NaN
- undefined

# Useful combination

## `value !== null && value !== "" && isFinite(value)`
### `value !== null`
- value is:
1. NOT null
2. NOT (user clicking cancel)

### `value !== ""`
- value is:
1. NOT an empty string

### `isFinite(value)`
- value is:
1. number
2. string containing only numbers
3. string cotaining non-numbers
4. null
5. user clicking `cancel`
6. empty string

### INTEPRETATION
TARGET: **Numbers + strings which contain numbers**
Value is:
1. NOT null
2. NOT (user clicking `cancel`)
3. NOT an empty string
4. number
5. string containing only numbers

## value === null || value === "" || !isFinite(value)
### `value === null`
- value is:
1. null
2. user clicking `cancel`

### `value === ""`
- value is:
1. empty string

### `!isFinite(value)`
- value is:
1. NOT a number
2. NOT a string containing only numbers


### INTEPRETATION
TARGET: **User clicks `cancel` OR No user input OR NOT a number or 
string containig only numbers**
Value is:
1. null
2. user clicking `cancel`
3. empty string
4. NOT a number
5. NOT a string containing only numbers
