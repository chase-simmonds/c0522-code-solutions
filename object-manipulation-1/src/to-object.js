/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

/* define a function toObject with one parameter keyValuePair. Create a new object
to store new properties and values. Take the index of keyValuePair at 1, which
is the value of the property. That is set equal to the keyValuePair at index 0,
which is the property name of the object. Since there is only 1 value at index 0,
it returns the object. */
