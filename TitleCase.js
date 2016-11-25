/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  // Splits the string into an array of words
  str = str.split(' ');
  // Upper cases the first character and lower cases the characters after the first
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase();
  }
  // Joins the words back into a sentence
  str = str.join(' ');
  return str;
}

console.log(titleCase("HeRe Is mY HandLE heRE IS my spOut"));