function toJadenCase(arg) {
  let array = arg.split(" ");

  let capitalizedArray = array.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
  return capitalizedArray.join(" ")
}