/* exported difference */

/* define function with two parameters first and second

create new empty array

loop through first array and if the second array doesnt contain the value from
the first, push the value of first into the new array

then do some thing for second array

loop through second and if first doesnt have the value in the second array, push
that value into the new array

return the new array */

function difference(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (let k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      newArray.push(second[k]);
    }
  }
  return newArray;
}
