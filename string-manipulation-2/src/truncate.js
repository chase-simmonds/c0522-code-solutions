/* exported truncate */
function truncate(length, string) {
  return string.slice(0, length) + '...';
}

// define function truncate and pass two parameters (length, string)
//
// use slice to target the first character of the string with 0
//
// pass length as second paramter as the 'end point'
//
// concatenate with '...'
//
// return result
