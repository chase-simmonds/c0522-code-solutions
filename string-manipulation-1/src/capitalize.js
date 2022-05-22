/* exported capitalize */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/* Define a function named capitalize passing one parameter word. In the codeblock
need to use uppercase method attached to the first character using the charat method
which is on the word object. Then lowercase the rest of the word but using lower
case method targeting the second character onward using the slice method, attached
to the same word value. concatenate the two together, which is then returned. */
