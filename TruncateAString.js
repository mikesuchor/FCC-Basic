/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/

function truncateString(str, num) {
  // If the string length is bigger than the number to cut and the number to cut is bigger than 3 slice from 0 to the number minus 3 and add three dots
  if (str.length > num && num > 3) {
    return str.slice(0, num-3) + "...";
  }
  // If the string length is bigger than the number to cut and the number to cut is less than or equal to 3 slice from 0 to the number (1, 2, or 3) and add three dots
  else if (str.length > num && num <= 3) {
    return str.slice(0, num) + "...";
  }
  // If the string is shorter than the number to cut don't slice anything
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);