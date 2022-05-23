/* exported getKeys */
function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}

/* define function getKeys with one parameter object. created an empty array
newArray to hold values from for in loop. Use for in loop because it's an object.
Use condition to find the var key in object. When it finds the key, it will push
the key into the empty array, making the value of newArray ['firstName']. The loop
will run again to look for another key in the object. There is another value, so
it executes the code in the loop block, pushing the key to the newArray. newArray
value is now ['firstName', 'lastName]. The loop will return to the conditional,
but since there aren't any keys left, it will return newArray from the function. */
