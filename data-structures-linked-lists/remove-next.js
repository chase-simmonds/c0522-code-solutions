/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const data = list.next.next;
    list.next = data;
  }
}
