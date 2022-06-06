/* exported ransomCase */
function ransomCase(string) {
  var word = string.charAt(0).toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string[i].toLowerCase();
    } else {
      word += string[i].toUpperCase();
    }
  }
  return word;
}

// define function ransomCase with one parameter string
//
// in the function block, create var word that is equal to the string, with the
// first character lowercased.
//
// create for loop to cycle through the length of the string.
// initialize at index 1 since all first letters will be lowercased
//
// use if statement to:
// if the word is divisible by 2 (even), we want to lowercase it using method
// if it has a remainder, it's an odd number, so we'll uppercase it using method.
//
// using the addition operator we'll assign values to the var word.
//
// return result
