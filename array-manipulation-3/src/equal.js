/* exported equal */
/* define function with two parameters first and second

if first is equal to second, return true

if length of first and length of second are not equal, return false

loop through first and if first at i is not equal to second at i, return false

else return true */

function equal(first, second) {
  if (first === second) {
    return true;
  }
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
