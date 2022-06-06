/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (count > array.length) {
    count = array.length;
  } for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define function drop with two parameters array and count
//
// create new empty array to push values into
//
// use if statement to handle edge cases for those where count is bigger than
// the array length
//
// if so, assign count to the array length.
//
// use for loop, initialized at count, i is less than array length, increment
//
// push array at i into new empty array.
//
// return the new array
