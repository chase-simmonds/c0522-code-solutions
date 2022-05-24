/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}

/* Declare a function with one parameter string.

if statement in code block with the condition string is strictly equal to an
empty string, then return empty array.

If it's anything else, return the string split at space. */
