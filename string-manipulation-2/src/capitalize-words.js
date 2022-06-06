/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}

// define function capitalizeWords with one parameter string
//
// create variable that splits the strings at spaces using split method
//
// create for loop initialized at zero, runs if i is less than words length, and
// incrememnts i
//
// in the loop block, target first character of word at i, uppercase it with method
//
// slice word from 2nd letter onward, then lowercase using method.
//
// concatenate the two and set it equal to word at i.
//
// return words and use join to convert back to string at space, since split turned
// it into array.
