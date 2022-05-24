/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* define function with one parameter.

create empty array to hold value from for loop.

declare for loop that initializes at 0, runs as long as i is less than the length
of the array, and incrememt i.

if the value of array at i is truthy, push that value to the new array.

return newarray.

*/
