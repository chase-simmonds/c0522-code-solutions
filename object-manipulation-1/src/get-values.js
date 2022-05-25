/* exported getValues */
function getValues(object) {
  var array = [];
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
}

/* define function with one parameter.

create empty array to hold values from for in loop.

target keys in the object.

push the value of object at key into empty array.

return the result of array. */
