// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// function midpoint(list) {
//   let iterator = list.head;
//   let doubleIterator = list.head;
//   while (doubleIterator.next && doubleIterator.next.next) {
//     doubleIterator = doubleIterator.next.next;
//     iterator = iterator.next;
//   }
//   return iterator;
// }

function midpoint(list) {
  if (!list.head) return null;
  let midCounter = list.head;
  let totalCounter = list.head;
  while (totalCounter.next && totalCounter.next.next) {
    midCounter = midCounter.next;
    totalCounter = totalCounter.next.next;
  }
  return midCounter;
}

module.exports = midpoint;
