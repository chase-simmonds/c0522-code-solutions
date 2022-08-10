/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const removeFront = queue.dequeue();
    return queue.enqueue(removeFront);
  }
}
