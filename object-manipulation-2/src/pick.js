/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}

// define function pick with two parameters source and keys
//
// create new empty object to hold values
//
// for loop to loop through keys, initialized at 0, less than keys length, increment
//
// if keys at i of source is not undefined, assign the keys at i of the new object
// to keys at i of source
//
// return the new empty object
