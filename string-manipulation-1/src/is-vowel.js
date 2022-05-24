/* exported isVowel */
function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' ||
    char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' ||
    char === 'U') {
    return true;
  } else return false;
}

/* declare function with one parameter

use if statement to compare char against each vowel, both upper and lower case.

if char is strictly equal to vowel value, return true.

If not, return false. */
