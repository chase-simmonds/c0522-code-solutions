/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const toyList = new LinkedList(list.next);
  list.next = new LinkedList(value);
  list.next.next = toyList.data;
}
