/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* define function with one parameter

create empty array to hold values from for loop

have for loop initialize at 1, condition as long as i is less than the length of
the array, increment i

push value of array at index into new array.

return result. */
