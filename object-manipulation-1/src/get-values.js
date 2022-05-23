/* exported getValues */
function getValues(object) {
  var array = [];
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
}

/* define function getvalues with one parameter object. in the function create
new empty array to hold values from loop. use a for in loop to target key in
the object. In dave, there are two keys, so it will meet the condition, then
execute the code in the loop block. the code will push the value of key index at
object dave into the empty array, which is David. the array's value is ['David'].
The loop will start over and search for another key. There is another key, so the
codeblock in the loop will execute, pushing the value of the index key at the
object into the array. The array's value is now ['David', 'Thomas'].

The loop will run again looking for a new key, but there isn't one, causing the
code in the loop not to execute. Instead it will return the array ['David', 'Thomas']
and the loop ends. */
