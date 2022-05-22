/* exported isLowerCased */
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
/* In this function I'm using an if statement to take the word it's given,
convert it to lowercase using the tolowercase method. Then I compare the original
word with the word completely lowercased. If the they match, it returns true, but
if it doesn't it returns false. */
