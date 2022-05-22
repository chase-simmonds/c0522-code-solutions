/* exported isVowel */
function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' ||
    char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' ||
    char === 'U') {
    return true;
  } else return false;
}

/* Declare a function isvowel and pass parameter char. Use if statement to compare
each character with all the vowels. Need to use bunch of or statements
to strictly compare their value to each vowel. Need to account for both uppercase
and lowercase. If they match return true. If not, return false. */
