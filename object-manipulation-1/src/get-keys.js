/* exported getKeys */
function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}

/* define function with one parameter.

create empty array to hold values from for in loop.

create for in loop looking for keys in the object.

then push the value of key into the empty array.

return the result. */
