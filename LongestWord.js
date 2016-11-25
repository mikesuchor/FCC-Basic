/* Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  // Variable to store the length of the longest word
  var longest = 0;
  // Split the string into an array of words
  str = str.split(' ');
  // If the length of the current word is greater than the length of the stored longest word, replace it
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > longest){
      longest=str[i].length;
    }
  }
  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
