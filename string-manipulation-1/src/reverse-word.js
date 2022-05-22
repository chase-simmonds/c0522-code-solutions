/* exported reverseWord */
function reverseWord(word) {
  var reverseString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }
  return reverseString;
}

/* declare function reverseWord passing one parameter word. delcare a variable
with an empty string to hold the value of the for loop.

The for loop initializes are word.length - 1 to account for the first character
being indexed at 0. For example we'll use the word "word." I will initialize
at index 3, check to see if that is greater than or equal to 0, which it is. Thus
it will take the index 3 and usin the addition operator it will add the character
'd' to the variable reverseString. 'i' will then be decremented to from 3 to 2.

Since the value of i is 2, which is still greater or equal to 0, it will run the
code block again. Which now uses i at index word at the 2 position. The letter
at index 2 is 'r,' which is then sent to the variable reverseString for storage.
reverseString now equals 'dr.' The loop will decrememnt i once again giving us 1.

The loop will check to see if 1 is greater than or equal to 0, which it is. so
the code block will execute again. This time passing the word at index 1 to
reverseString. The value of reverse string is now 'dro'. I is once again
decremented and brings the value of i to 0.

The loop executes again since i is equal to 0. This takes us back to the code
block to where word at i is 'w'. It uses the addition operator to add the value
of word at i to the variable reverseString. The value of reverseString is now
'drow'. The loop then decrements once more, giving i the value of -1.

Since -1 is not greater than or equal to 0, the loop ceases, and returns the value
of reverseString, which is 'word' is reverse order. */
