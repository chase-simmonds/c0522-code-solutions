/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// define function swapChars with three parameters (firstIndex, secondIndex, string)
//
// create new empty string to hold values from loop
//
// for loop initialized at 0, less than string.length, incremented
//
// use if statement to compare i to firstIndex
// if so, add string at secondIndex to empty string
//
// use another if statement that compares i to secondIndex
// if so, add string at firstIndex to empty string
//
// if none of those, just add string at i to the empty string
//
// return the empty string value
