// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let iterator = list.head;
  let iteratorPlusN = list.head;
  for (let i = 0; i !== n; i++) {
    iteratorPlusN = iteratorPlusN.next;    
  }
  while (iteratorPlusN.next) {
    iteratorPlusN = iteratorPlusN.next;
    iterator = iterator.next;
  }
  return iterator;
}

module.exports = fromLast;
