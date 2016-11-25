/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {

    // Arrays to store ascii codes and ascii codes to letters
    var codes = [];
    var letters = [];
  
    // Push the ascii code from the string to the ascii codes array
    for (var i = 0; i < str.length; i++) {
      codes.push(str.charCodeAt(i));
    }
  
    // Loop through the codes array
    for (var j = 0; j < codes.length; j++) {
      // If the ascii code is a symbol, push it to the array
      if (codes[j] >= 32 && codes[j] <= 64) {
        letters.push(String.fromCharCode(codes[j]));
      }
    // If the ascii code is between A-M add 13 to it
    else if (codes[j] < 78) {
      codes[j] += 13;
      letters.push(String.fromCharCode(codes[j]));
    }
    // If the ascii code is between N-Z subtract 13 from it
    else if (codes[j] >= 78) {
      codes[j] -= 13;
      letters.push(String.fromCharCode(codes[j]));
    }
  }
  // Join the letters array into a string and return it
  return letters.join('');
}

console.log(rot13("SERR PBQR PNZC"));