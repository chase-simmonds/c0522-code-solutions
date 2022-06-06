/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key !== keys[i]) {
        newObject[key] = source[key];
      }
      delete newObject[keys[i]];
    }
  }
  return newObject;
}

// define function omit with two parameters source and keys
//
// creat empty object to hold values.
//
// in code block for for in loop, create for loop initialized at 0, as long as
// i is less than the length of keys, incremement.
//
// condition if the value of key is not equal to the value of keys at i, then
// assign the value of source at key to the empty object at key
//
// delete the value of keys at i in the empty object
//
// return new object
