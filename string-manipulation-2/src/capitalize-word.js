/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// define function capitalizeWord with one parameter word
//
// start with edge case for javascript
//
// if statement, with condition if word converted to lowercase equals javascript
// return JavaScript
// if not, capitalize the first character of word using toUC method with charAt 0
//
// concatenate that with the rest of the word by slicing at at second character
// and use toLC method to ensure all characters from 1 through end of word is LC
//
// return the result
