/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* delcare a function tail with one parameter array. In the code block for the
function there's an empty array being declared with variable newArray.

After the empty array, there's a for loop where i is being initialized at 1,
which references the second position of the array. The condition is set to
continue running the loop as long as the value of i is less than the length of
the array.

for example, the array [foo, bar, baz] will initialize at bar, which is index 1.
The loop will check to see if 1 is less than the length of the array, which it
is, therefor it moves to execute the code in the function block, which pushes the
value of the array at the current index (bar) into the newArray declared above. I then
increments by 1, which now pushes the value to 2.

the value 2 is now checked against the condition statement. since 2 is less than
the value of of the array length, it will move into the function code block and
push the array at the current index (faz) into the array newArray. I incrementes by 1,
causing the new value of i to be 3. 3 is then checked against the conditional.
Since 3 is now more than the length of the array, it skips over the loop code
block and returns the value of newArray which is [bar, baz]. */
