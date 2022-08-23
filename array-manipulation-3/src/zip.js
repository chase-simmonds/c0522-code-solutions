/* exported zip */

/* define function with two parameters first and second

creat new empty array
apply math.min to both lengths of first and second parameters
assign result to new variable
loop through assigned variable
push first at i and second at i into new array
return new array
*/

function zip(first, second) {
  const newArray = [];
  const shortest = Math.min(first.length, second.length);
  for (let i = 0; i < shortest; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
