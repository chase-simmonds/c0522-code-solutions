/* exported isPalindromic */

function isPalindromic(string) {
  string = string.replaceAll(' ', '');
  var reversed = string.split('').reverse().join('');
  if (reversed === string) {
    return true;
  }
  return false;
}
