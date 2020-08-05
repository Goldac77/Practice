//This function returns an array of even numbers from zero to num
//In this case, num is 100

function evenNumbers(num){
  num = 100;
  var resultArr = [];
  
  for(var i = 0; i <= num; i++){
    //this checks if the number is even then pushes it to the array
    if(i % 2 == 0){
      resultArr.push(i);
    }
  }
  return resultArr;
}
