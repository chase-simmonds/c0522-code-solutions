/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* define function with one parameter.

create new empty array to hold values from for loop

create for loop initializing at length of array - 1, and decrement i

push value of array at index i into new array.

return new array. */
