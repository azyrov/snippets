// use replace() to replace all vowels with empty string
//i could use regex expressions too. lear those later

function disemvowel(str) {

    
    str = str.replaceAll("a","").replaceAll("e","").replaceAll("i", "").replaceAll("o", "").replaceAll("u","").replaceAll("A","").replaceAll("E","").replaceAll("I", "").replaceAll("O", "").replaceAll("U","");

  return str;
}

console.log(disemvowel("This website is for losers LOL"));


