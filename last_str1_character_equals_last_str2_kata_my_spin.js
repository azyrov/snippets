
function solution(str, ending){
  // TODO: complete
  let strArray = str.split("");
  let endingArray = ending.split("");
  
  console.log(`strArray: ${strArray.at([-1])}`);
  console.log(`endingArray[last item]: ${endingArray.at([-1])}`);

  if (endingArray.length === 1) {
    if (strArray.at([-1]) === endingArray[0]) {
        return true;
    }
  } else if (strArray.at([-1]) === endingArray.at([-1])) {
    return true;
  } else {
    return false;
  }

}

