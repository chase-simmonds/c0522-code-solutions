// Initialize accumulator variable with 0 or initalValue argument from the reduce().
// Loop through the array elements.
// Call the reducer function with the accumulator and current element as the arguments.
// Return accumulator after going through all the elements.

function reduce(array, reducer, initialValue) {
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    result = reducer(result, array[i], i, array);
  }
  return result;
}
