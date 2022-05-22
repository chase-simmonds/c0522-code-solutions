/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* define a new function reverse with parameter array. in the code block declare
a new empty array to hold values from for loop.

in this example we'll use the array [foo, bar, baz]. The function passed in this
array which is ordered 0, 1, 2. initialize i at the length of the array -1 (index 2)
to account for 0 index counting. this value is compared to the condition, which
2 is greater than or equal to 0. the array at index 2 is then pushed into the new
array [baz]. i is then decremented by 1, bringing i's value to 1.

the value of i (1) is then compared to the condition, which 1 is greater than or
equal to the array length -1 (2). therefor the code in the loop code block is
executed which pushes the value of array at index 1 into the new array. new array
value is [baz, bar]. i is then decremented by 1, bringing it's value to 0.

0 is then compared to the condition, which is true. since 0 is equal to 0. The
loop code block is then executed, pushing the value of the array at index 0 into
the new array. the new array value is [baz, bar, foo]. i is then decremented by 1,
bringing the value of i to -1.

-1 is checked against the condition, which is now false. therefore the code in
the loop block is not executed, and instead the value of newarray is returned.
[baz, bar, foo]. */
