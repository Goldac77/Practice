/*This was my first attempt at finding the maximum sum of a contiguous subsequece of an
array from a codewars challenge.
I misunderstood the question and ended up writing this program.*/
 
//This finds the sum of the numbers in an array that appears more than once

function moreThanOnce(arr) {
  //this converts the arr into a string with no spaces
  var arr2 = arr.join('');
  //an object to store each number and the number of times it appears as key value pairs
  var obj = {};
  //this sums up the repeating numbers
  var sum = 0;

  //looping through the string
  for(var i = 0; i < arr2.length; i++){
    //if the number exists in the obj, add 1 to it's value; else create a new key for that number with a value of one.
    if(obj[arr2.charAt(i)]){
      obj[arr2.charAt(i)] += 1;
    } else {
      obj[ar2.charAt(i)] = 1;
    }
  }

  //looping through obj
  for(var j in obj){
    //if a key has a value above 1, add that key to sum
    if(obj[j] > 1){
      sum += parseInt(j);
    }
  }
  return sum;
}
