/* Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
  // Array to store the string
  var repeatArray = [];
  // Add the str to the array num times
  for (var i = 0; i < num; i++) {
    repeatArray.push(str);
  }
  // Join the array into a string
  return repeatArray.join('');
}

console.log(repeatStringNumTimes("abc", 3));