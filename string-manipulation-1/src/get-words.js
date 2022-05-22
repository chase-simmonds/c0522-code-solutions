/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}

/* Delcare a function getWords with parameter string. In the code block use
if statement to compare value of string strictly to empty array. If it matches,
it will return an empty array. If it doesn't it will return the string which is
split using the split method at space (the separator of words). */
