/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* define function with one parameter.

create empty array to hold values from for loop.

initiate for loop at 0, condition as long as i is less than the length of the area
minus 1. increment i.

push the value of array at into new array.

return value of newarray. */
