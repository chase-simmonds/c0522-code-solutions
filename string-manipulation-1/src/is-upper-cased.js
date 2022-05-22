/* exported isUpperCased */
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

/* Declare the function and pass through the parameter word. Take word and
capitalize it using the uppercase method. Then I tkae the value of the word
completely uppercased and compare it to it's original value using strictly equal.
If that's true it will to return true. Use else statement to return false
if it isn't a strict match. */
