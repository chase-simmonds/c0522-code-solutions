/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// define function includes with two parameters array and value
//
// use for loop initialized at 0, less than array length, increment
//
// if the value of array at i is strictly equal to the value, return true
//
// if not, return false
