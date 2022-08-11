/* exported getLength */

function getLength(list) {
  let length = 0;
  while (list) {
    list = list.next;
    length++;
  }
  return length;
}
