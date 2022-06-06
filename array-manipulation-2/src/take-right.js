/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    count = array.length;
  } for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define function takeRight with two parameters array and count
//
// declare new empty array to hold values
//
// if statement for edge cases first
// if count is more than array length, set count to array length.
//
// use for loop initialized at array.length - count, less than array length, increment
//
// push array at i into new empty array.
//
// return new empty array
