/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* define function initial with one parameter array. in the code block for the
function, declare an empty array named newArray. There's a for loop initializing
at 0, the first index.

for example, the array will be [foo, bar, baz]. initializing at zero, then checks
the condition that 0 is less than the length of the array - 1. It is, so it will
execute the code in the loop block. It will push the current value index 0 (foo)
to the new array. i is then incremeneted by 1, which is now 1.

The value of 1 is checked against the condition, which 1 is less than the length
of the array -1. The code in the loop block is then executed again, which pushes
the value of array at index 1 (bar) to the newArray. i is then incremented by 1,
which causes the value to go up to 2.

The value of i (2) is now checked against the condition. 2 is not less than the
length of the array -1, so the loop block is not reran. Instead, it will return
the value of newArray, which is [foo, bar]. */
