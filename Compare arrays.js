function compareArrays(A, B){
  var arr = [];
  
//Use each character in A to compare every character in B. if the element in A is found in B, push it to arr
  for(var i = 0; i < A.length; i++){
    for(var j = 0; j < B.length; j++){
      if(A[i] == B[j]){
        arr.push(A[i]);
      }
    }
  }
  return arr;
}