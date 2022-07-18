/* exported reverseWords */

/* define function with one parameter string

create empty array for reversed array

create empty string for reversed string

split string at space and assign value to new variable

loop through array created from splitting the string

split string array at each character for each index, reverse it, then rejoin at
each character then assign to variable

push variable into the reverse array

join the reverse array at space, then assign to reverse string

return reversed string */

function reverseWords(string) {
  const reverseArray = [];
  let reverseString = '';
  const stringArray = string.split(' ');

  for (let i = 0; i < stringArray.length; i++) {
    const word = stringArray[i].split('').reverse().join('');
    reverseArray.push(word);
  }
  reverseString = reverseArray.join(' ');
  return reverseString;
}
