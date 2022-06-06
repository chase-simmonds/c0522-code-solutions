/* exported invert */
function invert(source) {
  var newObject = {};
  for (var key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}

// define function invert with one parameter source
//
// create empty object to hold values
//
// for in loop that loops through key(s) in source
//
// assign the source at key of the empty object to the value of key
//
// return the new object
