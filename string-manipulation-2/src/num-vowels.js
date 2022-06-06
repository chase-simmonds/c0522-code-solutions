/* exported numVowels */
function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' ||
    string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' ||
      string[i].toLowerCase() === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}

// define function numVowels with one parameter string.
//
// create var to keep track of vowel count
//
// use for loop, initialized at 0, less than length of string, increment.
//
// use if statement that takes string at i, converts to lowercase to save time
// instead of having to do it for both cases
//
// compare string at i to vowels. if they match, increment vowelCount
//
// return the result of the variable for vowel count
