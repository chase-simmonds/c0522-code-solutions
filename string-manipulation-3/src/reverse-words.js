/* exported reverseWords */
function reverseWords(string) {
  const reverseArray = [];
  let reverseString = '';
  const stringArray = string.split(' ');

  for (var i = 0; i < stringArray.length; i++) {
    var word = stringArray[i].split('').reverse().join('');
    reverseArray.push(word);
  }
  reverseString = reverseArray.join(' ');
  return reverseString;
}
