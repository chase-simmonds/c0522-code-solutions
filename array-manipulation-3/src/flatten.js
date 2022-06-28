/* exported flatten */

function flatten(array) {
  var flatArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k < array[i].length; k++) {
      if (Array.isArray(array[i])) {
        flatArray.push(array[i][k]);
      }
    }
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}
