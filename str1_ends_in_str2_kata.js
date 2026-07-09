// THIS CODE CHECKS TO SEE IF str ENDS IN ending 
function solution(str, ending){
  let test = str.endsWith(ending);
  if (test === true) {
    return true;
  } else {
    return false;
  }
}

// refactored
function solution(str, ending) {
	return str.endsWith(ending);
}
