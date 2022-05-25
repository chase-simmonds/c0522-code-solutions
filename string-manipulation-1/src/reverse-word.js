/* exported reverseWord */
function reverseWord(word) {
  var reverseString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }
  return reverseString;
}

/* declare function with one parameter.

declare empty string variable to hold values.

use for loop initialized at the end of the word length -1

Use for loop to cycle through word length until it reaches 0.

at character at index to empty string that was declared.

return the result. */
