/* Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  // Uses substring with the length of the string minus the length of the target string and the length of the string to extract the target from the string
  str = str.substring(str.length - target.length, str.length); 
  // If the string is the same as the target return true
  if (str === target){
    return true;
  }
  else {
      return false;
  }
}

console.log(confirmEnding("Bastian", "n"));