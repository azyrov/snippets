function isValidIP(str) {
    // split numbers to array 
  let arr = str.split(".");
  // check if each number follows the rules of an ip
    return arr.every((item, index, array) => {
            // total number of individual numbers should be 4 
           if ((array.length === 4) &&
                // each number should actually be a number 
                (/^\d+$/.test(item)) &&
                // each number should be 0 OR can start with any number other than 0 (1-9) and then be followed by any numbers
                //i basically, no numbers starting with 0  
                (/^(0|[1-9]\d*)$/.test(item) &&
                // each number should be greater than or equal to 0
                (item >= 0) &&
                // each number should be less than or equal to 255
                (item <= 255)))  {
            return true 
           } else {
                return false
           }
        })
}

console.log(isValidIP("0.0.0.0"        )) //,  true);
console.log(isValidIP("12.255.56.1"    )) //,  true);
console.log(isValidIP("137.255.156.100")) //,  true);
console.log(isValidIP(''               )) //, false);
console.log(isValidIP('abc.def.ghi.jkl')) //, false);
console.log(isValidIP('123.456.789.0'  )) //, false);
console.log(isValidIP('12.34.56'       )) //, false);
console.log(isValidIP('01.02.03.04'    )) //, false);
console.log(isValidIP('256.1.2.3'      )) //, false);
console.log(isValidIP('1.2.3.4.5'      )) //, false);
console.log(isValidIP('123,45,67,89'   )) //, false);
console.log(isValidIP('1e0.1e1.1e2.2e2')) //, false);
console.log(isValidIP(' 1.2.3.4'       )) //, false);
console.log(isValidIP('1.2.3.4 '       )) //, false);
console.log(isValidIP('12.34.56.-7'    )) //, false);
console.log(isValidIP('1.2.3.4\n'      )) //, false);
console.log(isValidIP('\n1.2.3.4'      )) //, false);
console.log(isValidIP("1.1.1.1"        )) //,  true);