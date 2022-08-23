/* exported union */

/* define function with two parameters first and second

create new empty array

loop through first and push values into the new array

loop through second and if the values are not already in the new array, push them
into the new array.

return new array */

function union(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (let k = 0; k < second.length; k++) {
    if (!newArray.includes(second[k])) {
      newArray.push(second[k]);
    }
  }
  return newArray;
}
