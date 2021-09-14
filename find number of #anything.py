#Just began learning regular expressions and placing this here for possible future reference or something...
#Wondering which is better or faster, though I suppose this problems are too simple for the comparison
#find the number of occurrences of the letter "f" in a string using regular expressions
import re
find = r"f"

x = re.findall(find, "#find the number of occurrences of the letter "f" in a string using regular expressions")
print(len(x))


#find the number of occurrences of the letter "f" in a string by iterating
x = "If I have find the number of f in the string..."
count = 0
for i in x:
  if(i == "f"):
    count += 0
print(count)
