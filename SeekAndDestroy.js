/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.

Remove all elements from the initial array that are of the same value as these arguments.

Seek and Destroy!
*/

function destroyer(arr) {
  var args = Array.from(arguments);
  // Loop through the arr array
  for (var i = 0; i < arr.length; i++) {
    // Loop through the arguments (args[1] and args[2])
    for (var j = 1; j < args.length; j++) {
      // If the current number in the arr array is equal to the current argument, delete the number in the array
      if (arr[i] == args[j]) {
        delete arr[i];
      }
    }
  }
  // Filter out the empty null spaces in the array
  return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));