/* exported sumAll */
function sumAll(numbers) {
  var num = 0;
  for (let i = 0; i < numbers.length; i++) {
    (num += numbers[i]);
  } return num;
}
