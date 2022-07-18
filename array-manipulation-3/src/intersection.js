/* exported intersection */

/* define function with two parameters first and second

create new empty array

loop through first array and if the second array includes the value of the first
array, push it into the new array

return the new array */

function intersection(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
