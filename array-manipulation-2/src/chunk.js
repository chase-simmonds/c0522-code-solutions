/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    newArray.push(chunk);
  }
  return newArray;
}

// define function chunk with two parameters array and slice
//
// create new empty array to hold values
//
// for loop initialized at 0, less than array.length, i is added to size
//
// slice array starting at i, and end at i plus size.
//
// hold value of that expression in new variable
//
// push value of new variable into new array
//
// return new array
