/* exported flatten */

/* create a new empty array

loop through array then loop through array at i in code block

check to see if array is an array at index i and if so push array at at first index
that is at second index into the new array

if it is not an array at first index, push array at first index into the new array

return new array.

*/

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k < array[i].length; k++) {
      if (Array.isArray(array[i])) {
        newArray.push(array[i][k]);
      }
    }
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
