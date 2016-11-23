/* 
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
  // Splits the string into an array of letters
  str = str.split('');
  // Reverses the array and joins the letters into a string
  return str.reverse().join('');
}

console.log(reverseString("hello"));
