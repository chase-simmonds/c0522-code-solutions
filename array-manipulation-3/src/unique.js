/* exported unique */

/* define function with one parameter array

create new empty array

loop through array

if the value at array is not already in the new array push it into the new
array

return the new array */

function unique(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
