/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var newFirstString = '';
  var newSecondString = '';

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      newFirstString += firstString[i];
    }
  }

  for (var k = 0; k < secondString.length; k++) {
    if (secondString[k] !== ' ') {
      newSecondString += secondString[k];
    }
  }

  newFirstString = newFirstString.split('').sort().join('');
  newSecondString = newSecondString.split('').sort().join('');

  if (newFirstString === newSecondString) {
    return true;
  }
  return false;
}
