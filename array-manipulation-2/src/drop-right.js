/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    count = array.length;
  } for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define function dropRight with two parameters array and count
//
// create new empty array to hold values
//
// use if statement to handle edge cases
// if count is more than array.length, set count equal to array length
//
// for loop initialized at 0, less than array length minus count, increment
//
// push array at i into the new array
//
// return new empty array
