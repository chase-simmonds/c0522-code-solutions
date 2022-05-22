/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* For this example we will use the array [true, true, false, true]

Define function compact with one parameter array. In the code block for the
function, there is an empty array being declared to hold the values returned from
the for loop.

The for loop initializes at 0, checks conditional to see if the value of i is less
than the length of the array (4). 0 is less than 4, so the code in the loop
executes. there's an if statement with the condition array at index, which signifies
if the value is truthy. Since true is truthy, the loop pushes the value of the
the array at index 0 into the empty array. newArray value is now [true]. i is
incremeneted by 1, making the value of i (1).

1 is compared to the condition, which is true since 1 is less than 4, so it
executes the if statement. it is checked against the condition in the if statement
 and since the value of array at index 1 is also true, it will execute the code
 in the if statement that pushes the array at index 1 into the new array. newArray
 value is [true, true]. i incremented by 1 bringing value of i to 2.

 2 is compared to the condition in the for loop. since 2 is less than 4, the code
 in the for loop executes, bringing it to the if statement. the value of array
 at index 2 is false, which doesn't meet the condition (falsey), so the code in the if
 staement doesn't execute. i is incremented by 1 bringing the value of i to 3.
 newarray value is still [true, true].

 3 is compared to the condition, which is true since 3 is less than 4, so it
executes the if statement. it is checked against the condition in the if statement
 and since the value of array at index 3 is true, it will execute the code
 in the if statement that pushes the array at index 3 into the new array. newArray
 value is [true, true, true]. i incremented by 1 bringing value of i to 4.

4 is compared to the condition in the for loop, which 4 is not less than the
length of the array (4). therefor the code in the for loop doesn't execute. instead
it returns the value of newArray which is [true, true, true].
*/
