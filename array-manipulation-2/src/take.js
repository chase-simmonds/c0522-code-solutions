/* exported take */
function take(array, count) {
  var newArray = [];
  if (count > array.length) {
    count = array.length;
  } for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define function take with two parameters array and count
//
// create empty array to pass values into
//
// handle edge case first, which is if count is bigger than array
// if so, set the count to the array length
//
// use for loop initialized at i, less than count, increment
//
// then push array at i into the empty array
//
// return the new array
