/* exported isPalindromic */

/* define function with one parameter string

use replace all to remove spaces from string and assign new value to the string

split the string at each character, reverse using method, then rejoin

assign reversed value to new variable

create conditional if reversed value is equal to string then return true

else return false
 */

function isPalindromic(string) {
  string = string.replaceAll(' ', '');
  var reversed = string.split('').reverse().join('');
  if (reversed === string) {
    return true;
  }
  return false;
}
