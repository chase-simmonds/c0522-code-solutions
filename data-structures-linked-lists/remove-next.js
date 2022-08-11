/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const next = list.next.next;
    list.next = next;
  }
}
