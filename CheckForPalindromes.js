/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {
  // Converts the string to lower case and uses a regular expression [\W_] to match any character that is not a word character \W and underscores _ and replaces it
  str = str.toLowerCase().replace(/[\W_]/g, '');
  // Compares if the string is the same if reversed
  if (str === str.split('').reverse().join('')) {
    return true;
  }
  else {
    return false;
  }
}

console.log(palindrome("eye"));