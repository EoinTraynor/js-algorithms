// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// function circular(list) {
//   let iterator = list.head;
//   let doubleIterator = list.head;
//   while (doubleIterator.next && doubleIterator.next) {
//     doubleIterator = doubleIterator.next.next;
//     iterator = iterator.next;
//     if (iterator === doubleIterator) return true;
//   }
//   return false;
// }

function circular(list) {
  if (!list.head) return false;
  let slowIncrement = list.head;
  let fastIncrement = list.head;
  while (fastIncrement.next && fastIncrement.next.next) {
    slowIncrement = slowIncrement.next;
    fastIncrement = fastIncrement.next.next;
    if (slowIncrement === fastIncrement) return true;
  }
  return false;
}

module.exports = circular;
