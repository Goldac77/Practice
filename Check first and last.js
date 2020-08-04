function check(str) {
  
  //incase an array is placed instead of a string, convert it to a string
  if(typeof(str) === 'object'){
    str = str.join("");
  }
  
  //check if first and last characters are equal and return true; else false
  var last = str.length - 1;
  if(str[0] === str[last]){
    return true;
  } else {
    return false;
  }
}



