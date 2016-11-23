/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  // New array to store the slices
  var chunkyArray = [];
  // Slices the array from i to i + size of the chunks you want then increments i by the size and pushes the chunks to the array
  for (var i = 0; i < arr.length; i+=size) {
    chunkyArray.push(arr.slice(i, i+size));
  }
  return chunkyArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));