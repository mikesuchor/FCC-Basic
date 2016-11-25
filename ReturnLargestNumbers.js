/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    // Array to store the highest number from each array
  var finalArray = [];
  // 
  for (var i = 0; i < arr.length; i++) {
    // Variable to store the largest number in an array and resets to 0 after each array
    var largestNumber = 0;
    // Checks if the current number is larger than the current largest number in an array and if it is stores it as the new largest number
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber)
      largestNumber = arr[i][j];
    }
    // Adds the largest number to the final array and restarts the loop
    finalArray.push(largestNumber);
  }
  return finalArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
