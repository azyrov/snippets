function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  let dnaUpperCase = dna.toUpperCase();
  let dnaArray = dnaUpperCase.split("");
  for (i = 0; i < dnaArray.length; i++) {
    if ((dnaArray[i] === "G") ||
        (dnaArray[i] === "C") ||
         (dnaArray[i] === "A")) {
      dnaArray[i];
    } else if (dnaArray[i] === "T") {
      dnaArray[i] = "U";
    } else {
      console.log("error!");
    }
  }

  return dnaArray.join("");
}

console.log(DNAtoRNA("GTaCATcGt"));

// dna is converted to upper case and stored in dnaUpperCase
// dnaUpperCase is converted to array, dnaArray
//i the array separates the letters so we can loop through them individually
// use FOR loop to loop through dnaArray
// IF CONDITION is dnaArray must be equal to one of "G", "T" or "C"
// THEN dnaArray is that array item
// ELSE IF THE CONDITION is dnaArray is equal to "T", dnaArray will be equal to "U"
// ELSE produces an error message
// remove the commas to convert array to one string then return dnaArray to the DNAtoRNA

