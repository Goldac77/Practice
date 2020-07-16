var string = "My name is Nicholas"
//This separates each word into single elements in an array

var split = string.split(" ");
var result = []

//This iterates through the array from the end to the beginning and adds each word to the result array
for(var i = split.length - 1; i >= 0; i--) {
  result.push(split[i]);
}

console.log(result.join(" "));
