/* exported isAnagram */

/* define function with two parameters firststring & second string

create empty string for both parameters and assign to variable

loop through first string and add value at i to newfirst string variable if
it isnt a space

do the same for second string and add value to new second string

for both newfirststring and newsecondstring, split at each character, sort,
then rejoin at each character

assign respective values to created variables

run coniditonal if newfirststring is equal to newsecondstring return true

else false
*/

function isAnagram(firstString, secondString) {
  let newFirstString = '';
  let newSecondString = '';

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      newFirstString += firstString[i];
    }
  }

  for (let k = 0; k < secondString.length; k++) {
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
